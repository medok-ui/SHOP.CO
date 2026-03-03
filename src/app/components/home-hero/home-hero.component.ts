import { IStatItem } from './stat-item.interface';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { statItems } from './stat-item.data';

@Component({
  selector: 'app-home-hero',
  imports: [],
  templateUrl: './home-hero.component.html',
  styleUrl: './home-hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeHeroComponent {
  statItems: IStatItem[] = statItems;
}
