import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { IReview } from '../../../interfaces/review.interface';

@Component({
  selector: 'app-review-card',
  imports: [],
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.scss', './review-card.adaptive.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewCardComponent {
  delete = output<number>();
  review = input.required<IReview>();

  onOption() {
    const id = this.review().id;
    const confirmation = confirm('Are you sure you want to hide this comment?');
    if (confirmation) {
      this.delete.emit(id);
    }
  }
}
