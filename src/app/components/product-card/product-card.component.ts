import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IProduct } from '../../interfaces/product.interface';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss', './product-card.adaptive.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  product = input.required<IProduct>();

  updateUrl(event: Event) {
    const target = event.target as HTMLImageElement;
    target.src = '/assets/images/products/fallback.svg';
  }
}
