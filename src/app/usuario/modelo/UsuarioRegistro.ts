import {Usuario} from "./Usuario";

export class UsuarioRegistro extends Usuario {

  email: string;
  rol: string;

  constructor(nombre: string = '',password: string = '',email: string = '',rol: string = null,id: number = null) {
    super(nombre,password);
    this.rol = rol;
    this.id = id;
  }
}
