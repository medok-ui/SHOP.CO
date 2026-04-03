import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { fromEvent, tap } from 'rxjs';
import { CatalogStateService } from '../../service/catalog-state.service';
import { ButtonLoginComponent } from '../../shared/button-login/button-login.component';
import { AlertComponent } from '../../shared/components/alert/alert.component';
import { colors } from './colors-data';

@Component({
  selector: 'app-filters-catalog',
  imports: [ButtonLoginComponent, FormsModule, AlertComponent],
  templateUrl: './filters-catalog.component.html',
  styleUrls: ['./filters-catalog.component.scss', './filters-catalog.adaptive.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiltersCatalogComponent implements AfterViewInit {
  private catalogStateService = inject(CatalogStateService);
  private destroyRef = inject(DestroyRef);
  private inputRange = viewChild.required<ElementRef<HTMLInputElement>>('inputRange');

  isAlert = signal<boolean>(false);
  alertText = signal<string>('');

  sizes = signal<string[]>(['XX-Small', 'Small', 'Medium', 'Large', 'X-Large', 'XX-Large']);

  colorActive = signal<string[]>([]);
  sizeActive = signal<string[]>([]);

  colors = signal<string[]>(colors);
  selectedPrice = signal<number>(150);

  ngAfterViewInit() {
    const input = this.inputRange().nativeElement;
    fromEvent(input, 'input')
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        tap((event) => {
          const el = event.target as HTMLInputElement;
          this.selectedPrice.set(+el.value);
          this.updateSlider(el, +el.value);
        }),
      )
      .subscribe();
    input.dispatchEvent(new Event('input'));
  }

  private updateSlider(el: HTMLInputElement, value: number) {
    this.catalogStateService.updateSlider(el, value);
  }

  onColorSelect(color: string) {
    this.colorActive.update((currentColors) =>
      currentColors.includes(color)
        ? currentColors.filter((c: string) => c !== color)
        : [...currentColors, color],
    );
  }

  onSizeSelect(size: string) {
    this.sizeActive.update((currentSize) =>
      currentSize.includes(size) ? currentSize.filter((s) => s !== size) : [...currentSize, size],
    );
  }

  onSubmit() {
    if (this.colorActive().length === 0) {
      this.isAlert.set(true);
      return this.alertText.set('Please select a color');
    }

    if (this.sizeActive().length === 0) {
      this.isAlert.set(true);
      return this.alertText.set('Please select a size');
    }

    this.catalogStateService.colorActive.set(this.colorActive());
    this.catalogStateService.sizeActive.set(this.sizeActive());
    this.catalogStateService.selectedPrice.set(this.selectedPrice());

    return this.catalogStateService.filteredProducts();
  }
}
