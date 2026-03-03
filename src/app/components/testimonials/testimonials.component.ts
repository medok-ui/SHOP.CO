import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  signal,
  viewChild,
  ViewChild,
} from '@angular/core';
import { ReviewCardComponent } from './review-card/review-card.component';
import { reviews } from './review-card.data';
import { IReview } from './review-card.interface';

@Component({
  selector: 'app-testimonials',
  imports: [ReviewCardComponent],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialsComponent {
  reviews = signal<IReview[]>(reviews);
  slider = viewChild.required<ElementRef>('slider');

  onScrollLeft() {
    this.slider().nativeElement.scrollBy({ left: -400, behavior: 'smooth' });
  }
  onScrollRight() {
    this.slider().nativeElement.scrollBy({ left: 400, behavior: 'smooth' });
  }
}
