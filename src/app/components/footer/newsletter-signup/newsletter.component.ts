import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AlertComponent } from '../../../shared/components/alert/alert.component';

@Component({
  selector: 'app-newsletter',
  imports: [FormsModule, AlertComponent, ReactiveFormsModule],
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss', './newsletter.adaptive.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsletterSignupComponent {
  isAlert = signal<boolean>(false);
  alertText = signal<string>('');

  from = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  onSubmit() {
    if (this.from.invalid) {
      this.isAlert.set(true);
      return this.alertText.set('Enter email!');
    }
    this.isAlert.set(true);
    this.alertText.set('You subscribed!');
  }
}
