import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/auth/shared/auth.service';
import { JwtAuthService } from './services/jwt-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'App Store';
  public email = '';
  public password = '';
  public loggedIn;

  constructor(public authService: AuthService,
              public jwtAuthService: JwtAuthService) {
    authService.handleAuthentication();

    this.jwtAuthService.loggedIn.subscribe(loggedIn => {
      this.loggedIn = loggedIn;
    });
  }

  ngOnInit() {
  }

  doLogin() {
    this.jwtAuthService.login(this.email, this.password);
  }

  doLogout() {
    this.jwtAuthService.logout();
  }
}
