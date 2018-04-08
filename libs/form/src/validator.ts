import {
  Validators,
  AbstractControl,
  ValidatorFn,
  ValidationErrors
} from '@angular/forms';
import { Injectable } from '@angular/core';

export class FormValidators {
  static required(value): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const result = Validators.required(control);
      if (!result) {
        return null;
      }
      return {
        ...value,
        ...result
      };
    };
  }
  static maxLength(value): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const result = Validators.maxLength(value.limit)(control);
      if (!result) {
        return null;
      }
      return {
        ...value,
        ...result
      };
    };
  }
  static minLength(value): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const result = Validators.minLength(value.limit)(control);
      if (!result) {
        return null;
      }
      return {
        ...value,
        ...result
      };
    };
  }
}
@Injectable()
export class ValidatorsHelper {
  getValidator(key: string): ValidatorFn {
    return FormValidators[key];
  }
}
