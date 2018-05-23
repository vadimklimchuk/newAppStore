import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from './product.model';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap, filter } from 'rxjs/operators';

@Injectable()
export class ProductsService {
  public url = 'https://herokuappdtore.herokuapp.com/data';

  constructor(private http: HttpClient) {
  }

  // getProducts(): Observable<any> {
  //   return of(PRODUCTS);
  // }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(this.url)
      .pipe(
        map(item => item[id])
      )
  }

  // getProduct(id: number): Observable<Product> {
  //   return of(PRODUCTS.find(product => product.id === id));
  // }
}
