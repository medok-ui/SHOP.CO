import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderLoginComponent } from "../../components/header-login/header-login.component";
import { FormLoginComponent } from "../../components/form-login/form-login.component";

@Component({
  selector: 'app-login',
  imports: [HeaderLoginComponent, FormLoginComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {

}
