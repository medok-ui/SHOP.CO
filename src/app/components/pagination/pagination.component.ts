import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { CatalogStateService } from '../../service/catalog-state.service';

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss', './pagination.adaptive.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent {
  protected state = inject(CatalogStateService);

  totalPages = computed(() => {
    const totalItems = this.state.allProducts().length;
    return Math.ceil(totalItems / this.state.pageSize);
  });

  pages = computed(() => {
    return Array.from({ length: this.totalPages() }, (_, i) => i + 1);
  });

  setPage(page: number) {
    if (page >= 1 && page <= this.totalPages()) {
      this.state.setPage(page);
    }
  }
}
