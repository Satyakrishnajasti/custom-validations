import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { passwordValidator } from 'src/shared/password-validator';

@Component({
  selector: 'app-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.sass'],
})
export class PasswordComponent {
  protected form = new FormGroup(
    {
      password: new FormControl<string>('', []),
      changePassword: new FormControl<string>('', []),
    },
    [passwordValidator('password', 'changePassword')]
  );

  validation() {
    this.form.hasError('notEqual') && this.form.touched;
  }
}
