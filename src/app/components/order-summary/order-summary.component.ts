import { FormsModule } from '@angular/forms';
import { CartService } from '../../service/cart.service';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-order-summary',
  imports: [FormsModule],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderSummaryComponent {
  cartService = inject(CartService);
  inputValue = signal<string>('');
  btnText = 'Apply';

  promoInput() {
    if (this.inputValue().trim()) {
      this.cartService.addPromo(this.inputValue().trim());
    }
    this.btnText = 'Active!!!';
  }
}
