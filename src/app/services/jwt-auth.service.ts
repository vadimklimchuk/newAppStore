import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import * as moment from "moment";
import {tap} from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable()
export class JwtAuthService {

  api = 'https://herokuappdtore.herokuapp.com/api';
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
    // const expiresAt = moment().add(authResult.expiresIn,'second');

    localStorage.setItem('jwtToken', authResult.token);
    // localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
  }

  destroyToken() {
    localStorage.removeItem('jwtToken');
    // localStorage.removeItem('expires_at');
  }

  login(email: string, password: string) {
    this.http.post(this.api + '/login', {
      email: email,
      password: password
    }).subscribe((resp: any) => {
      this.loggedIn.next(true);
      this.authResult = resp;
      this.saveToken(resp);
      console.log(resp)
    }, (errorResp) => {
      this.loggedIn.next(undefined);
    });
  }

  logout() {
    this.destroyToken();
    this.loggedIn.next(false);
  }

  check() {
    return this.http.get(this.api + '/check')
      .pipe(
        tap((data: boolean) => {
          console.log(data)
          this.loggedIn.next(data)
          // return data;
        }
        )
      );
  }
}