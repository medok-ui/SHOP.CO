import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../service/cart.service';
import { AlertComponent } from '../../shared/components/alert/alert.component';

@Component({
  selector: 'app-order-summary',
  imports: [FormsModule, AlertComponent],
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss', './order-summary.adaptive.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderSummaryComponent {
  cartService = inject(CartService);
  inputValue = signal<string>('');

  isAlert = signal<boolean>(false);
  alertText = signal<string>('');

  promoInput() {
    if (this.inputValue().trim() !== '') {
      this.cartService.addPromo(this.inputValue().trim());
      if (this.cartService.promo()) {
        this.isAlert.set(true);
        return this.alertText.set('you applied the promo code');
      }
    }

    this.isAlert.set(true);
    this.alertText.set('Enter promotional code...');
  }
}
