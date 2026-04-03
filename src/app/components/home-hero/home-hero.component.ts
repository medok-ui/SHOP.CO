import { ChangeDetectionStrategy, Component } from '@angular/core';
import { statItems } from './stat-item.data';
import { IStatItem } from './stat-item.interface';

@Component({
  selector: 'app-home-hero',
  imports: [],
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.scss', './home-hero.component.adaptive.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeHeroComponent {
  statItems: IStatItem[] = statItems;
}
