import {UsuarioSpam} from "./usuario-spam";
export class GrupoSpam {
  id: number;
  nombreGrupo: string;
  usuarios: UsuarioSpam[];

  constructor(nombreGrupo:string,usuarios: UsuarioSpam[]) {
    this.nombreGrupo = nombreGrupo;
    this.usuarios = usuarios;
  }

}
