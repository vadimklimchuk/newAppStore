import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../products/shared/product.model';
import { environment } from '../../environments/environment';

import { Observable } from 'rxjs/Observable';
import { catchError, map, shareReplay } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ProductsService {
  private products: Observable<Array<Product>>;

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<Product[]> {
    return !!this.products
      ? this.products
      : (this.products = this.http.get<Product[]>(`${environment.baseUrl}/data`)
        .pipe(
          map(data => data),
          shareReplay(1),
          catchError(this.handleError('getProducts', []))
        )
      )
  }

  getProduct(id: number): Observable<Product> {
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
