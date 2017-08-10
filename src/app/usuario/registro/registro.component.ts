import {Component, Input} from "@angular/core";
import {FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl} from '@angular/forms';
import {UsuarioService} from "../Usuario-service";
import {UsuarioRegistro} from "../modelo/UsuarioRegistro";
import {Usuario} from "../modelo/Usuario";

@Component({
  templateUrl: 'registro.component.html',
  providers: [UsuarioService]
})
export class RegistroComponent {

  usuario: UsuarioRegistro = new UsuarioRegistro();
  roles = Usuario.ROLES;
  //control
  registroForm: FormGroup;
  registrar: boolean = false;

  constructor(private fb: FormBuilder,public usuarioService: UsuarioService) {
    this.registroForm = this.fb.group({
      nombre: [null, Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(20)])],
      password: [null, Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(20)])],
      email: [null, Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(20),Validators.email])],
      rol: [null, Validators.compose([Validators.required,this.validRol()])]
    });
  }

  //insertar
  insertaUsuario() {
  this.registrar = true;
  console.log(this.registroForm.valid);
    if (this.registroForm.valid) {
      this.usuarioService.insertaUsuario(this.usuario);
    }
  }

  //funciones control
  validRol():ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      const name = control.value;
      return this.roles.indexOf(name) != -1 ?  null: {'rol': {name}};
    };
  }
  resetForm() {
    this.registroForm.reset({
      nombre: '', email: '',rol: this.roles[0]
    });
  }
  checkField(field: string) {
    return this.registrar && !this.registroForm.controls[field].dirty ||
      this.registroForm.controls[field].dirty &&
      !this.registroForm.controls[field].valid
  }

}
