import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/auth/shared/auth.service';
import { JwtAuthService } from './core/auth/shared/jwt-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'App Store';
  public name = 'vadim';
  public password = '1234';
  public loggedIn;

  constructor(public authService: AuthService,
              private jwtAuthService: JwtAuthService) {
    authService.handleAuthentication();

    this.jwtAuthService.loggedIn.subscribe(loggedIn => {
      this.loggedIn = loggedIn;
    });
  }

  ngOnInit() {
    this.jwtAuthService.check()
      .subscribe();
  }

  doLogin() {
    this.jwtAuthService.login(this.name, this.password);
  }

  doLogout() {
    this.jwtAuthService.logout();
  }
}
