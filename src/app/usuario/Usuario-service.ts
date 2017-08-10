import {Injectable} from "@angular/core";
import { Http, Response,Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {UsuarioRegistro} from "./modelo/UsuarioRegistro";
import {HttpUtil} from "../api/http/http-util";
import {UsuarioLogin} from "./modelo/UsuarioLogin";

@Injectable()
export class UsuarioService {
  constructor (private http: Http) {}

  insertaUsuario(usuario: UsuarioRegistro) {

    alert('insertado');
    return this.http.post("http://localhost/spammer/rest/insertaUsuario.php",
      { usuario }, HttpUtil.OPTIONS_DEFAULT)
      .map(HttpUtil.extractData)
      .catch(HttpUtil.handleError);
  }
  toLogin(usuarioLogin: UsuarioLogin): Observable<any> {
    return this.http.post("http://localhost/spammer/rest/loguear.php",
      { usuarioLogin }, HttpUtil.OPTIONS_DEFAULT)
      .map(HttpUtil.extractData)
      .catch(HttpUtil.handleError);
  }

}
