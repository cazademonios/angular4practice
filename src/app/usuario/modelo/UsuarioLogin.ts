import {Usuario} from "./Usuario";
export class UsuarioLogin extends Usuario {

  constructor(nombre: string = '',password: string = '',id: number = null) {
    super(nombre,password,id);
  }

}
