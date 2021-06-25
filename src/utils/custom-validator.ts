import { AbstractControl, ValidationErrors } from '@angular/forms';

export class MyValidators {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      return { cannotContainSpace: true };
    }
    return null;
  }
  static isConfirmed(control: AbstractControl): ValidationErrors | null {
    const email = control.get('password');
    const confirm = control.get('confirm');
    if (!email || !confirm) {
      return null;
    }
    return email.value === confirm.value ? null : { noMatch: true };
  }
}
