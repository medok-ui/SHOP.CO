import {
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  inject,
  OnInit,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ProductService } from '../../service/product.service';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-recommendations',
  imports: [ProductCardComponent],
  templateUrl: './recommendations.component.html',
  styleUrl: './recommendations.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecommendationsComponent implements OnInit {
  private productService = inject(ProductService);
  private destroyRef = inject(DestroyRef);

  private allRecommendedProducts = computed(() =>
    this.productService.filteredProducts().filter((p) => p.isNew),
  );

  recommendedProducts = computed(() =>
    this.allRecommendedProducts().filter((t) => t.isTopSelling === true),
  );
  recommendedProductsItem = computed(() => this.recommendedProducts().slice(0, 4));

  ngOnInit() {
    this.productService.getProducts().pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
  }
}
