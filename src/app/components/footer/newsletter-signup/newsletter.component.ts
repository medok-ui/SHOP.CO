import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  imports: [FormsModule],
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsletterSignupComponent {
  emailInput = '';
  buttonText = 'Subscribe to Newsletter';
  onSubmit() {
    if (this.emailInput.trim() === '') {
      this.buttonText = 'Enter Email...';
    } else {
      this.buttonText = 'Subscribed!';
      this.emailInput = '';
    }
  }
}
