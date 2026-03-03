import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { brands } from './brands.data';
import { IBrands } from './brands.interface';

@Component({
  selector: 'app-brands-section',
  imports: [],
  templateUrl: './brands-section.component.html',
  styleUrl: './brands-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandsSectionComponent {
  brandsItem = signal<IBrands[]>(brands);
}
