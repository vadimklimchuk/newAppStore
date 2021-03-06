import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidatorService } from './validator.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent implements OnInit {
  public submit: boolean;
  public formModel: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private validatorService: ValidatorService) {}

  ngOnInit() {
    this.formModel = this.fb.group({
      firstName: ['',
        [Validators.required, this.validatorService.nameValidator]],
      lastName: ['',
        [Validators.required, Validators.minLength(4)]],
      email: ['',
        [Validators.required, this.validatorService.emailValidator]],
      country: ['',
        [Validators.required, Validators.minLength(3)]],
      city: ['',
        [Validators.required, Validators.minLength(3)]],
      address: ['',
        [Validators.required, Validators.minLength(8)]],
      zipCode: ['',
        [Validators.required, Validators.minLength(3)]]
    });
    this.checking();
  }

  checking() {
    this.submit = this.formModel.valid && true;
    return false;
  }

  navCategory() {
    this.router.navigateByUrl("/category");
  }
}
