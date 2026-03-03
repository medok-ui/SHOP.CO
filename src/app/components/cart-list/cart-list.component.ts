import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { IProduct } from '../../interfaces/product.interface';
import { cartProduct } from '../../data/cart-product.data';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-cart-list',
  imports: [CartItemComponent],
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartListComponent {
  cartService = inject(CartService);

  onQuantityChange(updated: IProduct) {
    this.cartService.updateQuantity(updated);
  }
}
