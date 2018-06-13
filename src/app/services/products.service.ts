import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../products/shared/product.model';
import { environment } from '../../environments/environment';

import { Observable } from 'rxjs/Observable';
import { catchError, map, shareReplay, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Subject } from 'rxjs/Subject';
import * as Rx from "rxjs";

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  constructor(private http: HttpClient) {
  }

  public getProducts(): Observable<Product[]> {
    // debugger;
    // console.log(this.products)
    return Observable.if(
      () => !!(this.products && this.products.length),
      Observable.of(this.products),
      this.http.get<Product[]>(`${environment.baseUrl}/data`)
        .pipe(
          tap((data) => this.products = data),
          map(data => data),
          catchError(this.handleError('getProducts', []))
        )
    );
    // return !!this.products
    //   ? this.products
    //   : (this.products = this.http.get<Product[]>(`${environment.baseUrl}/data`)
    //     .pipe(
    //       tap((data) => console.log("data", data, "this.products", this.products)),
    //       map(data => data),
    //       shareReplay(1),
    //       catchError(this.handleError('getProducts', []))
    //     )
    //   )
  }

  public getProduct(id: number): Observable<Product> {
    return this.getProducts()
    .pipe(
      map(item => item[id]),
      catchError(this.handleError<Product>(`getProduct id=${id}`))
    )
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}
