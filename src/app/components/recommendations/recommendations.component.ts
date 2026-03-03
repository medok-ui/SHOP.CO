import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { IProduct } from '../../interfaces/product.interface';
import { products } from '../../data/product.data';
import { IReview } from '../testimonials/review-card.interface';

@Component({
  selector: 'app-recommendations',
  imports: [ProductCardComponent],
  templateUrl: './recommendations.component.html',
  styleUrl: './recommendations.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecommendationsComponent {
  recommendedProducts: IProduct[] = products.filter((t) => t.isTopSelling === true);
  recommendedProductsItem = computed(() => this.recommendedProducts.slice(0, 4));
}
