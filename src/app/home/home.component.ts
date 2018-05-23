import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public profile: any;
  public formModel: FormGroup;
  public backgoundColors = [
    {color: '#343A40', name: 'Dark'},
    {color: '#F0F1F2', name: 'Light'},
    {color: '#17a2b8', name: 'Turquoise'}
  ];
  public viewDashboard = [
    {value: 'block', name: 'Block'},
    {value: 'list', name: 'List'}
  ];
  public callToAction = [
    {value: 'true', name: 'Display'},
    {value: 'false', name: 'Not display'}
  ];

  constructor(public auth: AuthService,
              public localStorage: LocalStorageService,
              private fb: FormBuilder) {

  }

  ngOnInit() {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    } else {
      this.auth.getProfile((err, profile) => {
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
    this.localStorage.setLocaleStorageBg(this.formModel);
  }

  setLocaleStorageView() {
    this.localStorage.setLocaleStorageView(this.formModel);
  }

  setLocaleStorageCallTo() {
    this.localStorage.setLocaleStorageCallTo(this.formModel);
  }

}
