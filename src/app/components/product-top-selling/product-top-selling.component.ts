import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { IProduct } from '../../interfaces/product.interface';
import { ProductService } from '../../service/product.service';
import { ButtonComponent } from '../../shared/button/button.component';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-top-selling',
  imports: [ProductCardComponent, ButtonComponent],
  templateUrl: './product-top-selling.component.html',
  styleUrl: './product-top-selling.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductTopSellingComponent {
  private productService = inject(ProductService);
  private allProducts = signal<IProduct[]>([]);

  private readonly STEP = 4;
  private readonly allTopSelling = computed(() => this.allProducts().filter((p) => p.isTopSelling));

  private visibleCount = signal<number>(this.STEP);

  productsItem = computed(() => this.allTopSelling().slice(0, this.visibleCount()));
  isButtonVisible = computed(() => this.visibleCount() < this.allTopSelling.length);

  onAllProducts() {
    this.visibleCount.update((count) => count + this.STEP);
  }

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.allProducts.set(products);
      },
    });
  }
}
