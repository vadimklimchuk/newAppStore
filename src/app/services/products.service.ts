import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../products/shared/product.model';
import { environment } from '../../environments/environment';

import { Observable } from 'rxjs/Observable';
import { catchError, map, tap, filter } from 'rxjs/operators';

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.baseUrl}/data`);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${environment.baseUrl}/data`)
      .pipe(
        map(item => item[id])
      );
  }
}
