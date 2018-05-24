import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product.model';
import { Observable } from 'rxjs/Observable';
import {ProductsService} from '../model/products.service';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductResolveService implements Resolve<Product> {

  constructor(private productsService: ProductsService,
              private router: Router) { }


  //  Get the ID from URL and compare it with ID of products. If we find, then we display the product with this ID.
  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product | null> {
    const id = +route.paramMap.get('id');
    return this.productsService.getProducts()
      .map((products: Product[]) => {
        const currentProduct = products.find((product: Product) => {
          return id === product.id;
        });

        if (!currentProduct) {
          throw new Error('no product');
        }

        return currentProduct;
      })
      .catch(() => {
        alert('There is no such product');
        this.router.navigate(['dashboard']);
        return Observable.of(null);
      });
  }
}
