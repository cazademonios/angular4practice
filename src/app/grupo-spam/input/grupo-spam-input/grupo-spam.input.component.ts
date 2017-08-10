import {Component, ViewChildren, QueryList, Input} from "@angular/core";
import {GrupoSpam} from "../../grupo-spam";
import {Formulario} from "../../../api/formularios/Formulario";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {GrupoSpamService} from "../../grupo-spam.service";
import {UsuarioSpam} from "../../usuario-spam";
import {UsuarioSpamInput} from "../usuario-spam-input/usuario-spam.input.component";

@Component({
  selector: 'nuevo-grupo-spam',
  templateUrl: 'grupo-spam.input.component.html',
  providers: [Formulario,GrupoSpamService]
})
export class GrupoInputComponent{
  @Input() grupoSpam: GrupoSpam = new GrupoSpam('',[]);
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

  updateGrupo() {
    this.formulario.toSubmit();
    //recorremos todos los usuariosInputSpam para poner su submit a true
    this.usuariosQuery.forEach((usuarioSpamInput)=>{
      usuarioSpamInput.formulario.submit = true;
    });

    if (this.grupoForm.valid) {
      this.grupoSpamService.updateGroup(this.grupoSpam)
        .subscribe((grupoSpamUpdated)=>{
          console.log(grupoSpamUpdated);
        },(error) => {
          console.log(error);
        });
    }
  }

  newUsuario() {
    this.grupoSpam.usuarios.push(new UsuarioSpam('',''));
  }
}
