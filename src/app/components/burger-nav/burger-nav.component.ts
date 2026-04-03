import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { INavMenu } from '../header/nav-menu.interface';

@Component({
  selector: 'app-burger-nav',
  imports: [RouterLink],
  templateUrl: './burger-nav.component.html',
  styleUrl: './burger-nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BurgerNavComponent {
  linksNavigated = input.required<INavMenu[]>();
  isBurgerMenu = signal<boolean>(true);

  onCloseMenu() {
    this.isBurgerMenu.update((val) => !val);
  }
}
