import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { brands, brandsMobile } from './brands.data';
import { IBrands } from './brands.interface';

@Component({
  selector: 'app-brands-section',
  imports: [],
  templateUrl: './brands-section.component.html',
  styleUrls: ['./brands-section.component.scss', './brands-section.component.adaptive.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandsSectionComponent {
  brandsItem = signal<IBrands[]>(brands);
  brandsMobileItem = signal<IBrands[]>(brandsMobile);
}
