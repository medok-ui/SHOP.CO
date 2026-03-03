import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { IProduct } from '../../interfaces/product.interface';
import { ActivatedRoute } from '@angular/router';
import { products } from '../../data/product.data';
import { cartProduct } from '../../data/cart-product.data';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsComponent {
  products = signal<IProduct[]>(products);
  cartService = inject(CartService);
  textBtn = 'Add to Cart';
  // Получаем доступ к параметрам маршрута
  route = inject(ActivatedRoute);
  // Берём id из URL
  id = signal(Number(this.route.snapshot.paramMap.get('id')));
  // Находим продукт по id
  product = computed(() => this.products().find((p) => p.id === this.id()));
  // Подписываемся на изменения параметров URL, чтобы обновлять id при навигации
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id.set(+params['id']);
    });
  }

  onColorSelect(color: string) {
    this.product()!.selectedColor = color;
  }

  onSizeSelect(size: string) {
    this.product()!.selectedSize = size;
  }

  onQuantityMinus() {
    if (this.product()!.quantity > 1) {
      this.product()!.quantity -= 1;
    }
  }

  onQuantityPlus() {
    this.product()!.quantity += 1;
  }

  onAddCart() {
    this.cartService.addToCart(this.product()!);
    this.textBtn = 'Added!';
  }
}
