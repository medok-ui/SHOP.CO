import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ButtonLoginComponent } from '../../shared/button-login/button-login.component';
import { AlertComponent } from '../../shared/components/alert/alert.component';

@Component({
  selector: 'app-form-login',
  imports: [ButtonLoginComponent, RouterLink, ReactiveFormsModule, AlertComponent],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormLoginComponent {
  private route = inject(Router);
  isAlert = signal<boolean>(false);

  form = new FormGroup({
    login: new FormControl('', {
      validators: [Validators.required, Validators.minLength(4)],
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)],
    }),
    confirmLogin: new FormControl(false, {
      validators: [Validators.requiredTrue],
    }),
  });

  onSubmit() {
    const savedLogin = localStorage.getItem('saved-form-login')!;
    const savedPassword = localStorage.getItem('saved-form-password')!;

    if (this.form.valid) {
      const loadedLogin = JSON.parse(savedLogin);
      const loadedPassword = JSON.parse(savedPassword);
      if (
        this.form.controls.login.value === loadedLogin &&
        this.form.controls.password.value === loadedPassword
      ) {
        this.route.navigate(['/home']);
        return;
      }
    }

    return this.isAlert.set(true);
  }
}
