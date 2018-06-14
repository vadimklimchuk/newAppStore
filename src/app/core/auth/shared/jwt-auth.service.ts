import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {tap} from 'rxjs/operators';

import { environment } from '../../../../environments/environment';

@Injectable()
export class JwtAuthService {
  loggedIn: BehaviorSubject<boolean>;
  authResult: {};
  timer;

  constructor(
    private http: HttpClient
  ) {
    const jwtToken = this.getToken();
    this.loggedIn = new BehaviorSubject<boolean>(jwtToken ? true : false);
  }

  getToken() {
    return localStorage.getItem('jwtToken');
  }

  saveToken(authResult) {
    localStorage.setItem('jwtToken', authResult.token);
  }

  destroyToken() {
    localStorage.removeItem('jwtToken');
  }

  login(email: string, password: string) {
    this.http.post(`${environment.jwtUrl}/login`, {
      email: email,
      password: password
    }).subscribe((resp: any) => {
      this.loggedIn.next(true);
      this.authResult = resp;
      this.saveToken(resp);
    }, (errorResp) => {
      this.loggedIn.next(undefined);
    });
  }

  logout() {
    this.destroyToken();
    this.loggedIn.next(false);
  }

  check() {
    return this.http.get(`${environment.jwtUrl}/check`)
      .pipe(
        tap((data: boolean) => {
          this.loggedIn.next(data)
        }
        )
      );
  }
}