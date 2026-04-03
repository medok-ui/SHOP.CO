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
import { ProductService } from '../../service/product.service';
import { ButtonComponent } from '../../shared/button/button.component';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-section',
  imports: [ProductCardComponent, ButtonComponent],
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.scss', './product-section.adaptive.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductSectionComponent implements OnInit {
  private productService = inject(ProductService);
  private readonly STEP = 4;
  private destroyRef = inject(DestroyRef);

  private visibleCount = signal<number>(this.STEP);

  private newArrivals = computed(() =>
    this.productService.filteredProducts().filter((p) => p.isNew),
  );

  productsItem = computed(() => this.newArrivals().slice(0, this.visibleCount()));
  isButtonVisible = computed(() => this.visibleCount() < this.newArrivals().length);

  ngOnInit() {
    this.productService.getProducts().pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
  }

  onAllProducts() {
    this.visibleCount.update((count) => count + this.STEP);
  }
}
