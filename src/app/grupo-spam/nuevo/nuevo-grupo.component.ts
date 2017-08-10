import {Component, ViewChildren, QueryList, ViewChild} from "@angular/core";
import {GrupoSpam} from "../grupo-spam";
import {Formulario} from "../../api/formularios/Formulario";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {GrupoSpamService} from "../grupo-spam.service";
import {UsuarioSpam} from "../usuario-spam";
import {UsuarioSpamInput} from "../input/usuario-spam-input/usuario-spam.input.component";
import {GrupoInputComponent} from "../input/grupo-spam-input/grupo-spam.input.component";

@Component({
  templateUrl: 'nuevo-grupo.component.html',
  providers: [Formulario,GrupoSpamService]
})
export class NuevoGrupoComponent{
  grupoSpam: GrupoSpam = new GrupoSpam('',[]);

  @ViewChild(GrupoInputComponent)
  private grupoInputComponent: GrupoInputComponent;

  crearGrupo() {
    this.grupoInputComponent.crearGrupo();
  }

}
