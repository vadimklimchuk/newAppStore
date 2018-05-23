import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public profile: any;
  public formModel: FormGroup;
  public green: string = '12423rfs'

  constructor(public authService: AuthService,
              private fb: FormBuilder) {

  }

  ngOnInit() {
    if (this.authService.userProfile) {
      this.profile = this.authService.userProfile;
    } else {
      this.authService.getProfile((err, profile) => {
        this.profile = profile;
      });
    }

    // Forms validation
    this.formModel = this.fb.group({
      background: ['', Validators.required],
      viewDashboard: ['', Validators.required],
      action: ['', Validators.required]
    });
  }

  setLocaleStorageBg() {
    localStorage.setItem('bg', JSON.stringify(this.formModel.value.background));
  }

  setLocaleStorageView() {
    localStorage.setItem('view', JSON.stringify(this.formModel.value.viewDashboard));
  }

  setLocaleStorageCallTo() {
    localStorage.setItem('callTo', JSON.stringify(this.formModel.value.action));
  }

}
