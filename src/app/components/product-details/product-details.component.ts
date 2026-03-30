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
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../interfaces/product.interface';
import { CartService } from '../../service/cart.service';
import { ProductService } from '../../service/product.service';
import { AlertComponent } from '../../shared/components/alert/alert.component';

@Component({
  selector: 'app-product-details',
  imports: [AlertComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsComponent implements OnInit {
  private productService = inject(ProductService);
  private destroyRef = inject(DestroyRef);
  private route = inject(Router);
  private cartService = inject(CartService);

  isAlert = signal<boolean>(false);

  products = signal<IProduct[]>([]);
  // Получаем доступ к параметрам маршрута
  activatedRoute = inject(ActivatedRoute);
  // Берём id из URL
  id = signal(Number(this.activatedRoute.snapshot.paramMap.get('id')));
  // Находим продукт по id
  product = computed(() => this.products().find((p) => p.id === this.id()));
  ngOnInit(): void {
    // Подписываемся на изменения параметров URL, чтобы обновлять id при навигации
    this.activatedRoute.params.subscribe((params) => {
      this.id.set(+params['id']);
    });
    this.productService.getProducts().pipe(takeUntilDestroyed(this.destroyRef)).subscribe();

    this.products.set(this.productService.allProducts());
  }

  updateUrl(event: Event) {
    const target = event.target as HTMLImageElement;
    target.src = '/assets/images/products/fallback.svg';
  }

  onColorSelect(color: string) {
    const currentId = this.id();

    this.products.update((allProducts) =>
      allProducts.map((p) => (p.id === currentId ? { ...p, selectedColor: color } : p)),
    );
  }

  onSizeSelect(size: string) {
    const currentId = this.id();

    this.products.update((allProducts) =>
      allProducts.map((p) => (p.id === currentId ? { ...p, selectedSize: size } : p)),
    );
  }

  onQuantityMinus() {
    const currentId = this.id();

    if (this.product()!.quantity > 1) {
      this.products.update((allProducts) =>
        allProducts.map((p) =>
          p.id === currentId ? { ...p, quantity: Math.max(1, p.quantity - 1) } : p,
        ),
      );
    }
  }

  onQuantityPlus() {
    const currentId = this.id();

    this.products.update((allProducts) =>
      allProducts.map((p) => (p.id === currentId ? { ...p, quantity: (p.quantity || 0) + 1 } : p)),
    );
  }

  onAddCart() {
    this.cartService.addToCart(this.product()!);
    this.isAlert.set(true);

    this.route.navigate(['/cart']);
  }
}
