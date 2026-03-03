import { ChangeDetectionStrategy, Component, computed, effect, signal } from '@angular/core';
import { ReviewCardComponent } from './review-card/review-card.component';
import { review } from '../../data/review.data';
import { IReview } from '../../interfaces/review.interface';
import { ButtonComponent } from '../../shared/button/button.component';
import { FormsModule } from '@angular/forms';
import { IFilterOption } from './review-option.interface';
import { filterOptions } from './review-option.data';

@Component({
  selector: 'app-review-list',
  imports: [ReviewCardComponent, ButtonComponent, FormsModule],
  templateUrl: './review-list.component.html',
  styleUrl: './review-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewListComponent {
  private readonly STEP = 6;
  private readonly visibleCount = signal<number>(this.STEP);

  allReviews = signal<IReview[]>(review);
  reviewsItem = computed(() => this.allReviews().slice(0, this.visibleCount()));
  isButtonVisible = computed(() => this.visibleCount() < this.allReviews().length);
  reviewCard = signal<IReview[]>(review);

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
}
