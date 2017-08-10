import { Component } from '@angular/core';
import {UsuarioAuthService} from "./seguridad/usuario-auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsuarioAuthService]
})
export class AppComponent {
  constructor(public auth : UsuarioAuthService) {}
}
