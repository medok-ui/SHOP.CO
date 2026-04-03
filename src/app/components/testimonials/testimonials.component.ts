import { ChangeDetectionStrategy, Component, ElementRef, signal, viewChild } from '@angular/core';
import { reviews } from './review-card.data';
import { IReview } from './review-card.interface';
import { ReviewCardComponent } from './review-card/review-card.component';

@Component({
  selector: 'app-testimonials',
  imports: [ReviewCardComponent],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss', './testimonials.adaptive.scss'],
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
