import { Injectable } from '@angular/core';
import { AUTH_CONFIG, LOGOUT_CONFIG } from './auth0-variables';
import { Router } from '@angular/router';
import * as auth0 from 'auth0-js';
import { LocalStorageAuthService } from './local-storage-auth.service';

@Injectable()
export class AuthService {
  userProfile: any;

  auth0 = new auth0.WebAuth({
    clientID: AUTH_CONFIG.clientID,
    domain: AUTH_CONFIG.domain,
    responseType: 'token id_token',
    audience: `https://${AUTH_CONFIG.domain}/userinfo`,
    redirectUri: AUTH_CONFIG.callbackURL,
    scope: 'openid profile'
  });

  constructor(public router: Router,
              private localStorageAuth: LocalStorageAuthService) { }

  public getProfile(cb): void {
    const accessToken = localStorage.getItem(LOGOUT_CONFIG.accessToken);
    if (!accessToken) {
      throw new Error('Access Token must exist to fetch profile');
    }

    const self = this;
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        self.userProfile = profile;
      }
      cb(err, profile);
    });
  }

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        this.router.navigate(['/home']);
      } else if (err) {
        this.router.navigate(['/home']);
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  private setSession(authResult): void {
    this.localStorageAuth.setSession(authResult);
  }

  logout(): void {
    this.localStorageAuth.logout();
  }

  isAuthenticated(): boolean {
    return this.localStorageAuth.isAuthenticated();
  }
}

