import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ButtonLoginComponent } from '../../shared/button-login/button-login.component';

function equalValues(controlName1: string, controlName2: string) {
  return (control: AbstractControl) => {
    const password = control.get(controlName1)?.value;
    const confirmPassword = control.get(controlName2)?.value;

    if (password === confirmPassword) return null;

    return { valuesNotEqual: true };
  };
}

@Component({
  selector: 'app-form-register',
  imports: [ButtonLoginComponent, RouterLink, ReactiveFormsModule],
  templateUrl: './form-register.component.html',
  styleUrl: './form-register.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormRegisterComponent {
  btnText = signal<string>('Register');

  form = new FormGroup({
    login: new FormControl('', {
      validators: [Validators.required, Validators.minLength(4)],
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),

    passwords: new FormGroup(
      {
        password: new FormControl('', {
          validators: [Validators.required, Validators.minLength(6)],
        }),
        confirmPassword: new FormControl('', {
          validators: [Validators.required, Validators.minLength(6)],
        }),
      },
      { validators: [equalValues('password', 'confirmPassword')] },
    ),

    acceptTerms: new FormControl(false, {
      validators: [Validators.requiredTrue],
    }),
  });

  onSubmit() {
    if (this.form.invalid) {
      alert(
        'Please check the form. Make sure all fields are filled in correctly and your passwords match.',
      );
      return;
    }

    if (this.form.valid) {
      localStorage.setItem('saved-form-login', JSON.stringify(this.form.controls.login.value));
      localStorage.setItem(
        'saved-form-password',
        JSON.stringify(this.form.controls.passwords.controls.password.value),
      );
    }

    this.form.reset();
    this.btnText.set('Registered ♡');
  }
}
