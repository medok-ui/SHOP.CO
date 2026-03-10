import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { IProduct } from '../../interfaces/product.interface';
import { ProductService } from '../../service/product.service';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-recommendations',
  imports: [ProductCardComponent],
  templateUrl: './recommendations.component.html',
  styleUrl: './recommendations.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecommendationsComponent {
  private productService = inject(ProductService);
  private allRecommendedProducts = signal<IProduct[]>([]);

  recommendedProducts = computed(() =>
    this.allRecommendedProducts().filter((t) => t.isTopSelling === true),
  );
  recommendedProductsItem = computed(() => this.recommendedProducts().slice(0, 4));

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.allRecommendedProducts.set(products);
      },
    });
  }
}
