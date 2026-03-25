import {
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../service/cart.service';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsComponent implements OnInit {
  private productService = inject(ProductService);
  private destroyRef = inject(DestroyRef);

  products = this.productService.allProducts;
  cartService = inject(CartService);
  textBtn = 'Add to Cart';
  // Получаем доступ к параметрам маршрута
  route = inject(ActivatedRoute);
  // Берём id из URL
  id = signal(Number(this.route.snapshot.paramMap.get('id')));
  // Находим продукт по id
  product = computed(() => this.products().find((p) => p.id === this.id()));
  ngOnInit(): void {
    // Подписываемся на изменения параметров URL, чтобы обновлять id при навигации
    this.route.params.subscribe((params) => {
      this.id.set(+params['id']);
    });

    this.productService.getProducts().pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
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
