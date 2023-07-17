import { AbstractControl, ValidatorFn } from '@angular/forms';

export function passwordValidator(
  password: string,
  changePassword: string
): ValidatorFn {
  return (group: AbstractControl): { [key: string]: any } | any => {
    const pass = group.get(password)?.value;
    const chan = group.get(changePassword)?.value;

    if (pass == chan) {
      console.log(false);
      return { "notEqual": false };
    } else {
      console.log(true);
      return { "notEqual": true };
    }
  };
}
