import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { IProduct } from '../../interfaces/product.interface';
import { CartService } from '../../service/cart.service';
import { CartItemComponent } from '../cart-item/cart-item.component';

@Component({
  selector: 'app-cart-list',
  imports: [CartItemComponent],
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss', './cart-list.adaptive.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartListComponent {
  cartService = inject(CartService);

  onQuantityChange(updated: IProduct) {
    this.cartService.updateQuantity(updated);
  }
}
