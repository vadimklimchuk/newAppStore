import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable()
export class ValidatorService {

  public nameValidator(control: FormControl): { [key: string]: boolean } {
    const value = control.value || '';
    const valid = /^[a-zA-Zа-яА-Я]+$/.test(value);
    return valid ? null : {nospecial: true};
  }

  public emailValidator(control: FormControl): { [key: string]: boolean } {
    const value = control.value || '';
    const valid = /.+@.+\..+/.test(value);
    return valid ? null : {nospecial: true};
  }

}
