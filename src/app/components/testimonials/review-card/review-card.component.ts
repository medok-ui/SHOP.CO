import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IReview } from '../review-card.interface';

@Component({
  selector: 'app-review-card',
  imports: [],
  templateUrl: './review-card.component.html',
  styleUrl: './review-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewCardComponent {
  review = input.required<IReview>();
}
