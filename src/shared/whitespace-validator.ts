import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function whiteSpace(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | any => {  
        const value = (control && control.value && control.value.toString() || '').trim().length === 0;
        console.log(control.value);
        return value ? { 'space': true } : null;
    }
}

export class Space {
    static validation(control: FormControl): ValidationErrors | null {
        const value = (control && control.value && control.value.toString() || '').trim().length === 0;
        console.log(value);
        return value ? { 'space': true } : null
    }
}