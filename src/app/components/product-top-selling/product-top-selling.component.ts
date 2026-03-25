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
  selector: 'app-product-top-selling',
  imports: [ProductCardComponent, ButtonComponent],
  templateUrl: './product-top-selling.component.html',
  styleUrl: './product-top-selling.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductTopSellingComponent implements OnInit {
  private productService = inject(ProductService);
  private destroyRef = inject(DestroyRef);

  private readonly STEP = 4;

  private visibleCount = signal<number>(this.STEP);

  private allTopSelling = computed(() =>
    this.productService.filteredProducts().filter((p) => p.isNew),
  );

  productsItem = computed(() => this.allTopSelling().slice(0, this.visibleCount()));
  isButtonVisible = computed(() => this.visibleCount() < this.allTopSelling().length);

  onAllProducts() {
    this.visibleCount.update((count) => count + this.STEP);
  }

  ngOnInit() {
    this.productService.getProducts().pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
  }
}
