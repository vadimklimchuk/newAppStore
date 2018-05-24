import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LOGOUT_CONFIG } from './auth0-variables';

@Injectable()
export class LocalStorageAuthService {

  constructor(public router: Router) { }

  setSession(authResult): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem(LOGOUT_CONFIG.accessToken, authResult.accessToken);
    localStorage.setItem(LOGOUT_CONFIG.idToken, authResult.idToken);
    localStorage.setItem(LOGOUT_CONFIG.expiresAt, expiresAt);
  }

  logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem(LOGOUT_CONFIG.accessToken);
    localStorage.removeItem(LOGOUT_CONFIG.idToken);
    localStorage.removeItem(LOGOUT_CONFIG.expiresAt);
    // Go back to the home route
    this.router.navigate(['/']);
  }

  isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem(LOGOUT_CONFIG.expiresAt));
    return new Date().getTime() < expiresAt;
  }
}






