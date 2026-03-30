import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CartListComponent } from '../../components/cart-list/cart-list.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { OrderSummaryComponent } from '../../components/order-summary/order-summary.component';
import { CartService } from '../../service/cart.service';
import { AlertComponent } from '../../shared/components/alert/alert.component';

@Component({
  selector: 'app-cart',
  imports: [
    FooterComponent,
    HeaderComponent,
    CartListComponent,
    OrderSummaryComponent,
    AlertComponent,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {
  cartService = inject(CartService);
  isAlert = signal<boolean>(false);
}
