import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from './product.model';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap, filter } from 'rxjs/operators';

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient,
              @Inject('baseUrl') private _baseUrl: string) {
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this._baseUrl}/data`);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this._baseUrl}/data`)
      .pipe(
        map(item => item[id])
      )
  }
}
