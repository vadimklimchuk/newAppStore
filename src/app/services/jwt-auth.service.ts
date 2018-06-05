import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class JwtAuthService {

  api = 'http://localhost:5000/api';
  loggedIn: BehaviorSubject<boolean>;
  token;
  refreshToken;

  constructor(
    private http: HttpClient
  ) {
    const jwtToken = this.getToken();
    this.loggedIn = new BehaviorSubject<boolean>(jwtToken ? true : false);
  }

  getToken() {
    return localStorage.getItem('jwtToken');
  }

  saveToken(token: string) {
    localStorage.setItem('jwtToken', this.token);
    localStorage.setItem('jwtRefreshToken', this.refreshToken);
  }

  destroyToken() {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('jwtRefreshToken');
  }

  login(email: string, password: string) {
    this.http.post(this.api + '/login', {
      email: email,
      password: password
    }).subscribe((resp: any) => {
      this.loggedIn.next(true);
      this.token = resp.token;
      this.refreshToken = resp.refreshToken;
      this.saveToken(resp.token);
    }, (errorResp) => {
      this.loggedIn.next(undefined);
    });
  }

  logout() {
    this.destroyToken();
    this.loggedIn.next(false);
  }
}