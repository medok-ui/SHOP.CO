import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header-login',
  imports: [RouterLink],
  templateUrl: './header-login.component.html',
  styleUrl: './header-login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderLoginComponent {

}
