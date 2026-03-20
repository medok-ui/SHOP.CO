import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderLoginComponent } from '../../components/header-login/header-login.component';
import { FormRegisterComponent } from "../../components/form-register/form-register.component";

@Component({
  selector: 'app-register',
  imports: [HeaderLoginComponent, FormRegisterComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {

}
