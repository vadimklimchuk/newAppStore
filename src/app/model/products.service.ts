import { Injectable } from '@angular/core';

import { Product } from './product.model';
import { PRODUCTS } from './static.datasource';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ProductsService {

  constructor() {
  }

  getProducts(): Observable<Product[]> {
    return of(PRODUCTS);
  }

  getProduct(id: number): Observable<Product> {
    return of(PRODUCTS.find(product => product.id === id));
  }
}
