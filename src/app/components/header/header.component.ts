import {
  AfterViewInit,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { debounceTime, fromEvent, map } from 'rxjs';
import { ProductService } from '../../service/product.service';
import { navLink } from './nav-menu.data';
import { INavMenu } from './nav-menu.interface';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements AfterViewInit {
  private productService = inject(ProductService);
  private destroyRef = inject(DestroyRef);

  menuItems = signal<INavMenu[]>(navLink);
  searchInput = viewChild.required<ElementRef<HTMLInputElement>>('searchInput');
  searchQuery = signal<string>('');

  ngAfterViewInit() {
    fromEvent(this.searchInput().nativeElement, 'input')
      .pipe(
        map((event) => (event.target as HTMLInputElement).value),
        debounceTime(500),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe({
        next: (value) => {
          this.productService.searchQuery.set(value);
        },
      });
  }
}
