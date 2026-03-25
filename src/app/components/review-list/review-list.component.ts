import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IReview } from '../../interfaces/review.interface';
import { ProductService } from '../../service/product.service';
import { ButtonComponent } from '../../shared/button/button.component';
import { ReviewCardComponent } from './review-card/review-card.component';
import { filterOptions } from './review-option.data';
import { IFilterOption } from './review-option.interface';

@Component({
  selector: 'app-review-list',
  imports: [ReviewCardComponent, ButtonComponent, FormsModule],
  templateUrl: './review-list.component.html',
  styleUrl: './review-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewListComponent implements OnInit {
  private productService = inject(ProductService);

  private readonly STEP = 6;
  private readonly visibleCount = signal<number>(this.STEP);

  allReviews = signal<IReview[]>([]);
  reviewsItem = computed(() => this.allReviews().slice(0, this.visibleCount()));
  isButtonVisible = computed(() => this.visibleCount() < this.allReviews().length);

  filterOptions = signal<IFilterOption[]>(filterOptions);
  selectedFilterValue = signal<string>('most-recent');
  filteredReviews = computed(() => {
    const filter = this.selectedFilterValue();
    const allReviews = this.reviewsItem();
    switch (filter) {
      case 'most-recent':
        return allReviews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      case 'highest-rating':
        return allReviews.sort((a, b) => b.rating - a.rating);
      case 'lowest-rating':
        return allReviews.sort((a, b) => a.rating - b.rating);
      default:
        return allReviews;
    }
  });

  constructor() {
    effect(() => {
      this.selectedFilterValue();
      this.filteredReviews();
      this.allReviews();
    });
  }

  onAllReviews() {
    this.visibleCount.update((count) => count + this.STEP);
  }

  onDelete(id: number) {
    this.allReviews.update((r) => r.filter((r) => r.id !== id));
  }

  ngOnInit() {
    this.productService.getReviews().subscribe({
      next: (r) => {
        this.allReviews.set(r);
      },
    });
  }
}
