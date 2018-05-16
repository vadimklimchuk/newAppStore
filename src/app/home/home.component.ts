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

  constructor(public auth: AuthService,
              private fb: FormBuilder) {
    
  }

  ngOnInit() {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
      console.log(this.profile)
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
      });
    }

    //  Forms validation
    this.formModel = this.fb.group({
      background: ['', Validators.required],
      color: ['', Validators.required]
    })
  }

  setLocaleStorage() {
    localStorage.setItem('obj', JSON.stringify(this.formModel.value));
  }

}
