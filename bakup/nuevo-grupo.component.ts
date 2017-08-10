import {Component, ViewChildren, QueryList} from "@angular/core";
import {GrupoSpam} from "../grupo-spam";
import {Formulario} from "../../api/formularios/Formulario";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {GrupoSpamService} from "../grupo-spam.service";
import {UsuarioSpam} from "../usuario-spam";
import {UsuarioSpamInput} from "../input/usuario-input.component";

@Component({
  templateUrl: 'nuevo-grupo.component.html',
  providers: [Formulario,GrupoSpamService]
})
export class NuevoGrupoComponent{
  grupoSpam: GrupoSpam = new GrupoSpam('',[]);
  grupoForm: FormGroup;
  //usado para acceder a los componentes hijos
  //si solo se quiere uno usar mejor ViewChild()
  @ViewChildren(UsuarioSpamInput) usuariosQuery: QueryList<UsuarioSpamInput>;

  constructor(public formulario:Formulario,private fb: FormBuilder,public grupoSpamService: GrupoSpamService) {
    this.grupoForm = this.fb.group({
      nombre: [null, Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(20)])],
    });
    this.formulario.formGroup = this.grupoForm;
  }

  crearGrupo() {
    this.formulario.toSubmit();
    //recorremos todos los usuariosInputSpam para poner su submit a true
    this.usuariosQuery.forEach((usuarioSpamInput)=>{
      usuarioSpamInput.formulario.submit = true;
    });

    if (this.grupoForm.valid) {

      this.grupoSpamService.insertGroup(this.grupoSpam)
        .subscribe(grupoSpam => {
          console.log(grupoSpam);
        },
        error => {
          console.log(error);
        });

    }
  }
  newUsuario() {
    this.grupoSpam.usuarios.push(new UsuarioSpam('',''));
  }
}
