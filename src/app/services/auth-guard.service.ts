import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { AuthService } from '../core/auth/shared/auth.service';

@Injectable()

export class AuthGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) {}

  canActivate(): boolean {
    return this.auth.isAuthenticated();
  }
}
