import {Component, ViewChild} from "@angular/core";
import {GrupoSpam} from "../grupo-spam";
import {GrupoSpamService} from "../grupo-spam.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Formulario} from "../../api/formularios/Formulario";
import {GrupoSpamMensajeInputComponent} from "../input/grupo-spam-mensaje/grupo-spam-mensaje.input.component";

@Component({
  templateUrl: 'lista-grupo.component.html',
  providers: [GrupoSpamService,Formulario]
})
export class ListaGrupoComponent {
  mensaje: string = '';
  gruposSpam: GrupoSpam[] = [];

  @ViewChild(GrupoSpamMensajeInputComponent)
  private grupoSpamMensaje:GrupoSpamMensajeInputComponent;

  listaGrupoForm: FormGroup;
  constructor(public grupoSpamService: GrupoSpamService,
              private fb: FormBuilder,public formulario:Formulario) {
    this.setData();
    this.setForm();
  }

  enviaMensajeGrupos() {
    this.grupoSpamMensaje.enviaMensajeGrupos();
  }

  deleteGroup(id: number) {
    alert('eliminado grupo: '+id);
  }
  //sets
  setData() {
    this.grupoSpamService.listaGroup().subscribe(
      (gruposSpam: GrupoSpam[]) => {
        this.gruposSpam = gruposSpam;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  setForm() {
    this.listaGrupoForm = this.fb.group({
      mensaje: [null, Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(1000)])]
    });
    this.formulario.formGroup = this.listaGrupoForm;
  }
}
