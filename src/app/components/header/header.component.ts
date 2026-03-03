import { Component } from '@angular/core';
import { navLink } from './nav-menu.data';
import { RouterLink } from "@angular/router";
import { INavMenu } from './nav-menu.interface';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  menuItems: INavMenu[] = navLink;
}
