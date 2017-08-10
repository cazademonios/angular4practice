import {Component, OnInit, ViewChild} from "@angular/core";
import {GrupoSpam} from "../grupo-spam";
import {ActivatedRoute, Router} from "@angular/router";
import {GrupoSpamService} from "../grupo-spam.service";
import {GrupoInputComponent} from "../input/grupo-spam-input/grupo-spam.input.component";
import {GrupoSpamMensajeInputComponent} from "../input/grupo-spam-mensaje/grupo-spam-mensaje.input.component";

@Component({
  templateUrl: 'modifica-grupo.component.html',
  providers: [GrupoSpamService]
})
export class ModificaGrupoComponent implements OnInit{
  grupoSpam: GrupoSpam = new GrupoSpam('',[]);

  @ViewChild(GrupoInputComponent)
  private grupoInput: GrupoInputComponent;
  @ViewChild(GrupoSpamMensajeInputComponent)
  private grupoSpamMensaje:GrupoSpamMensajeInputComponent;

  constructor(private route: ActivatedRoute,
              private router: Router,
              public grupoSpamService:GrupoSpamService) {

  }

  enviarMensajeGrupo() {
    this.grupoSpamMensaje.enviaMensajeGrupo();
  }

  ngOnInit(): void {
    let id: string = this.route.snapshot.params['id'];
    this.grupoSpam.id = +id;
    this.grupoSpamService.getGroup(id)
      .subscribe((grupoSpam)=>{
        console.log(grupoSpam);
        this.grupoSpam = grupoSpam;
      },(error) => {
        console.log(error.text());
      });
  }

  updateGrupo() {
    this.grupoInput.updateGrupo();
  }

}
