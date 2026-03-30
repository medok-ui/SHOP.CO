import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ProductService } from '../../service/product.service';
import { PaginationComponent } from '../pagination/pagination.component';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CatalogStateService } from './../../service/catalog-state.service';

@Component({
  selector: 'app-casual-catalog',
  imports: [ProductCardComponent, PaginationComponent],
  templateUrl: './casual-catalog.component.html',
  styleUrl: './casual-catalog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CasualCatalogComponent implements OnInit {
  private productService = inject(ProductService);
  private catalogStateService = inject(CatalogStateService);
  private destroyRef = inject(DestroyRef);

  allProducts = this.productService.allProducts;
  displayedProducts = this.catalogStateService.displayedProducts;

  ngOnInit() {
    this.productService.getProducts().pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
  }
}
