import {Component, Input} from "@angular/core";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Formulario} from "../../../api/formularios/Formulario";
import {GrupoSpamService} from "../../grupo-spam.service";
import {GrupoSpam} from "../../grupo-spam";

@Component({
  selector: 'mensaje-grupo-spam',
  templateUrl: 'grupo-spam-mensaje.input.component.html',
  providers: [GrupoSpamService,Formulario]
})
export class GrupoSpamMensajeInputComponent {
  mensaje:string;
  @Input() grupoSpam:GrupoSpam;
  @Input() gruposSpam:GrupoSpam[];
  mensajeForm:FormGroup;

  constructor(private fb: FormBuilder,public formulario:Formulario,
              public grupoSpamService: GrupoSpamService,) {
    this.setForm();
  }

  enviaMensajeGrupos() {
    if (this.gruposSpam != null) {
      this.formulario.toSubmit();
      if (this.mensajeForm.valid) {
        let gruposToEnviarCorreo = this.gruposSpam.filter((grupoSpam: any)=>{
            return grupoSpam.check != null && grupoSpam.check == true;
          }
        ).map((grupoSpam)=>grupoSpam.id);

        if (gruposToEnviarCorreo.length > 0) {
          this.grupoSpamService.enviaCorreoListaGroup(this.mensaje,gruposToEnviarCorreo)
            .subscribe((data) => {
              console.log('okXD');
              console.log(data);
            },(error) =>{
              console.log(error);
            });
        }
        console.log(gruposToEnviarCorreo);
      }
    }
  }
  enviaMensajeGrupo() {
    this.formulario.toSubmit();
    console.log('probando');
    if (this.grupoSpam != null && this.mensajeForm.valid) {
        this.grupoSpamService.enviaCorreoGroup(this.mensaje,this.grupoSpam.id)
          .subscribe((data) => {
            console.log('okXD');
            console.log(data);
          },(error) =>{
            console.log(error);
          });
      }
  }

  setForm() {
    this.mensajeForm = this.fb.group({
      mensaje: [null, Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(1000)])]
    });
    this.formulario.formGroup = this.mensajeForm;
  }
}
