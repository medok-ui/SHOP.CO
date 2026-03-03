import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { IProduct } from '../../interfaces/product.interface';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { products } from '../../data/product.data';

@Component({
  selector: 'app-product-top-selling',
  imports: [ProductCardComponent, ButtonComponent],
  templateUrl: './product-top-selling.component.html',
  styleUrl: './product-top-selling.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductTopSellingComponent {
  private readonly STEP = 4;
  private readonly allTopSelling = products.filter((p) => p.isTopSelling);
  private visibleCount = signal<number>(this.STEP);

  productsItem = computed(() => this.allTopSelling.slice(0, this.visibleCount()));
  isButtonVisible = computed(() => this.visibleCount() < this.allTopSelling.length);

  onAllProducts() {
    this.visibleCount.update((count) => count + this.STEP);
  }
}
  