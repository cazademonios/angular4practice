export class Usuario {
  id: number;
  nombre: string;
  password: string;

  static readonly ROLES = ["admin", "user"];

  constructor(nombre: string = '',password: string = '',id: number = null) {
    this.nombre = nombre;
    this.password = password;
    this.id = id;
  }
}
