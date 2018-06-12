import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/auth/shared/auth.service';
import { timer } from 'rxjs/observable/timer';
import { HttpClient } from '@angular/common/http';

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
              private http: HttpClient) {
    authService.handleAuthentication();
  }

  ngOnInit() {
  }
}
