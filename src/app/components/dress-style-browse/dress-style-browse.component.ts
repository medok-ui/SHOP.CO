import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { categories } from './dress-style-browse.data';
import { ICategory } from './dress-style-browse.interface';

@Component({
  selector: 'app-dress-style-browse',
  imports: [RouterLink],
  templateUrl: './dress-style-browse.component.html',
  styleUrl: './dress-style-browse.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DressStyleBrowseComponent {
  categoriesItem: ICategory[] = categories;
}
