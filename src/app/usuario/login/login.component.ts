import {Component} from "@angular/core";
import {Usuario} from "../modelo/Usuario";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {UsuarioService} from "../Usuario-service";
import {Formulario} from "../../api/formularios/Formulario";
import {UsuarioLogin} from "../modelo/UsuarioLogin";
import {UsuarioAuthService} from "../../seguridad/usuario-auth.service";
import {Router} from "@angular/router";

@Component({
  templateUrl: 'login.component.html',
  providers: [Formulario,UsuarioService,UsuarioAuthService]
})
export class LoginComponent {
  usuarioLogin : UsuarioLogin = new UsuarioLogin();
  errorLogin:any = null;

  loginForm: FormGroup;

  constructor(private fb: FormBuilder,public usuarioService: UsuarioService,
              public formulario:Formulario,public usuarioAuthService:UsuarioAuthService,
              private router: Router) {
    this.setForm();
  }

  toLogin() {
    this.formulario.toSubmit();
    if (this.loginForm.valid) {
      this.usuarioService.toLogin(this.usuarioLogin)
        .subscribe((data)=> {
          console.log(data);
          this.usuarioAuthService.login(data.nombre);
          this.router.navigate(['']);

        },(error)=>{
          console.log(error);
          this.errorLogin = error;
        })
    }
  }

  //sets
  setForm() {
    this.loginForm = this.fb.group({
      nombre: [null, Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(20)])],
      password: [null, Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(20)])]
    });
    this.formulario.formGroup = this.loginForm;
  }
}
