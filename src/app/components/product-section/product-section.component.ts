import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { IProduct } from '../../interfaces/product.interface';
import { ProductService } from '../../service/product.service';
import { ButtonComponent } from '../../shared/button/button.component';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-section',
  imports: [ProductCardComponent, ButtonComponent],
  templateUrl: './product-section.component.html',
  styleUrl: './product-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductSectionComponent {
  private productService = inject(ProductService);
  private readonly STEP = 4;

  private allProducts = signal<IProduct[]>([]);
  private visibleCount = signal<number>(this.STEP);

  private newArrivals = computed(() => this.allProducts().filter((p) => p.isNew));
  productsItem = computed(() => this.newArrivals().slice(0, this.visibleCount()));
  isButtonVisible = computed(() => this.visibleCount() < this.newArrivals().length);

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.allProducts.set(products);
      },
    });
  }

  onAllProducts() {
    this.visibleCount.update((count) => count + this.STEP);
  }
}
