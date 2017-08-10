import {Component, Input, OnInit} from "@angular/core";
import {UsuarioSpam} from "../../usuario-spam";
import { FormGroup, Validators, FormControl} from "@angular/forms";
import {Formulario} from "../../../api/formularios/Formulario";

@Component({
  selector: 'usuario-spam',
  templateUrl: 'usuario-spam.input.component.html',
  providers: [Formulario]
})
export class UsuarioSpamInput implements OnInit{
  ngOnInit(): void {
    this.formGroup.addControl('email'+this.indice,new FormControl(null, Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(20),Validators.email])));
    this.formGroup.addControl('nombre'+this.indice,new FormControl('', Validators.maxLength(30)));
    this.formulario.formGroup = this.formGroup;
  }
  @Input() usuario: UsuarioSpam;
  @Input() indice: number;
  @Input() formGroup: FormGroup;

  constructor(public formulario:Formulario) {
  }

  validaUsuario() {
    this.formulario.submit = true;
  }
}
