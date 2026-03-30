import { computed, inject, Injectable, signal } from '@angular/core';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class CatalogStateService {
  private productService = inject(ProductService);

  colorActive = signal<string[]>([]);
  sizeActive = signal<string[]>([]);
  selectedPrice = signal<number>(150);

  allProducts = this.productService.allProducts;

  currentPage = signal(1);
  pageSize = 9;

  displayedProducts = computed(() => {
    const products = this.filteredProducts();

    const startIndex = (this.currentPage() - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;

    return products.slice(startIndex, endIndex);
  });

  setPage(page: number) {
    this.currentPage.set(page);
  }

  updateSlider(el: HTMLInputElement, value: number) {
    const pct = ((value - +el.min) / (+el.max - +el.min)) * 100;
    el.style.background = `linear-gradient(to right, #000 ${pct}%, #f0f0f0 ${pct}%)`;
  }

  filteredProducts = computed(() => {
    const colors = this.colorActive();
    const sizes = this.sizeActive();
    const price = this.selectedPrice();
    const products = this.allProducts();

    return products.filter((p) => {
      const matchesColor = colors.length === 0 || p.colors.some((c) => colors.includes(c));
      const matchesSize = sizes.length === 0 || p.sizes.some((s) => sizes.includes(s));
      const matchesPrice = !price || p.price <= price;
      return matchesColor && matchesSize && matchesPrice;
    });
  });
}
