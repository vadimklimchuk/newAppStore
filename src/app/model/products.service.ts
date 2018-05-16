import { Injectable } from '@angular/core';

import { Product } from './product.model';
import { PRODUCTS } from './static.datasource';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ProductsService {
  // private products: Product[] = [];
  // private categories: string[] = [];

  constructor() {
  }

  getProducts(): Observable<Product[]> {
    return of(PRODUCTS);
    // return this.products
    // .filter(p => category === null || category === p.category);
  }

  getProduct(id: number): Observable<Product> {
    return of(PRODUCTS.find(product => product.id === id));
  }
  
  // getCategories(): string[] {
  //     return this.categories;
  // }
}
