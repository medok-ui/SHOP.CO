import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { CartListComponent } from '../../components/cart-list/cart-list.component';
import { OrderSummaryComponent } from '../../components/order-summary/order-summary.component';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-cart',
  imports: [FooterComponent, HeaderComponent, CartListComponent, OrderSummaryComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {
  cartService = inject(CartService);
}
