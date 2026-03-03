import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NewsletterSignupComponent } from './newsletter-signup/newsletter.component';
import { RouterLink } from '@angular/router';

import { socialLinks } from './footer-data/social-links.data';
import { footerLinks } from './footer-data/footer-links.data';
import { paymentMethods } from './footer-data/footer-payment-methods.data';

import type { ISocialLink } from './footer-interface/social-links.interface';
import type { IFooterSection } from './footer-interface/footer-links.interface';
import type { IPaymentMethods } from './footer-interface/footer-payment-methods.interface';

@Component({
  selector: 'app-footer',
  imports: [NewsletterSignupComponent, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  socialLinks = signal<ISocialLink[]>(socialLinks);
  footerLinks = signal<IFooterSection[]>(footerLinks);
  paymentMethods = signal<IPaymentMethods[]>(paymentMethods);
}
