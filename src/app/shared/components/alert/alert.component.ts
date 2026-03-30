import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  input,
  OnInit,
  output,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tap, timer } from 'rxjs';

@Component({
  selector: 'app-alert',
  imports: [],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  closed = output<void>();

  alertText = input.required();
  isVisible = signal<boolean>(true);

  ngOnInit() {
    const timer$ = timer(3000)
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        tap(() => this.onClose()),
      )
      .subscribe();
  }

  onClose() {
    this.isVisible.set(false);
    setTimeout(() => this.closed.emit(), 300);
  }
}
