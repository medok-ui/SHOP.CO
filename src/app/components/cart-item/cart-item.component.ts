import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IProduct } from '../../interfaces/product.interface';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-cart-item',
  imports: [RouterLink],
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss', './cart-item.adaptive.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent {
  cart = input.required<IProduct>();
  quantityChange = output<IProduct>();
  cartService = inject(CartService);

  onQuantityMinus() {
    if (this.cart().quantity > 1) {
      this.quantityChange.emit({ ...this.cart(), quantity: this.cart().quantity - 1 });
    }
  }

  onQuantityPlus() {
    this.quantityChange.emit({ ...this.cart(), quantity: this.cart().quantity + 1 });
  }

  onRemoveCart(id: number) {
    this.cartService.removeCart(id);
  }
}
