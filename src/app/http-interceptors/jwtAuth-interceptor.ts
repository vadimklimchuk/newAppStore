import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { JwtAuthService } from '../core/auth/shared/jwt-auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private jwtAuthService: JwtAuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Get the auth token from the service.
    const authToken = this.jwtAuthService.getToken();

    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const authReq = req.clone({
      setHeaders: { Authorization: 'Bearer ' + authToken } 
    });

    // send cloned request with header to the next handler.
    return next.handle(authReq);
  }
}