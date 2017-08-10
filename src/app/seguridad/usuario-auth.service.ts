import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Injectable()
export class UsuarioAuthService {

  constructor(private router: Router) {}

  login(nombreUsuario: string) {
    localStorage.user = nombreUsuario;
  }
  checkLogin():boolean {
    return localStorage.getItem('user') != null;
  }
  logout() {
    localStorage.removeItem("user");
    this.router.navigate(['login']);
  }
}
