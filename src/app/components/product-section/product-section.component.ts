import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { ProductCardComponent } from '../product-card/product-card.component';
import { IProduct } from '../../interfaces/product.interface';
import { products } from '../../data/product.data';

@Component({
  selector: 'app-product-section',
  imports: [ProductCardComponent, ButtonComponent],
  templateUrl: './product-section.component.html',
  styleUrl: './product-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductSectionComponent {
  private readonly STEP = 4;
  private readonly allNewArrivals = products.filter((p) => p.isNew);
  private visibleCount = signal<number>(this.STEP);

  productsItem = computed(() => this.allNewArrivals.slice(0, this.visibleCount()));
  isButtonVisible = computed(() => this.visibleCount() < this.allNewArrivals.length);

  onAllProducts() {
    this.visibleCount.update((count) => count + this.STEP);
  }
}
