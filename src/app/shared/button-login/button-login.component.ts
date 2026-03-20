import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'button[appButtonLogin]',
  imports: [],
  templateUrl: './button-login.component.html',
  styleUrl: './button-login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonLoginComponent {

}
