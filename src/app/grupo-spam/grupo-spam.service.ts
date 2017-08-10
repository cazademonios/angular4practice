import {Injectable} from "@angular/core";
import {GrupoSpam} from "./grupo-spam";

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Http, Response,Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {HttpUtil} from "../api/http/http-util";

@Injectable()
export class GrupoSpamService {
  constructor (private http: Http) {}

  deleteGroup() {

  }

  insertGroup(grupoSpam: GrupoSpam) {
    let options = new RequestOptions({ headers: HttpUtil.HEADER_JSON });

    return this.http.post("http://localhost/spammer/rest/insertaGrupoSpam.php",
      { grupoSpam }, options)
      .map(HttpUtil.extractData)
      .catch(HttpUtil.handleError);
  }

  updateGroup(grupoSpam: GrupoSpam) {
    return this.http.post("http://localhost/spammer/rest/updateGrupoSpam.php",
      { grupoSpam }, HttpUtil.OPTIONS_DEFAULT)
      .map(HttpUtil.extractData)
      .catch(HttpUtil.handleError);
  }
  getGroup(id:string):Observable<GrupoSpam> {
    let options = new RequestOptions(
      { headers: HttpUtil.HEADER_JSON, params: {'id': id} });

    return this.http.get("http://localhost/spammer/rest/getGrupoSpam.php",
      options)
      .map(HttpUtil.extractData)
      .catch(HttpUtil.handleError);
  }

  listaGroup():Observable<GrupoSpam[]> {
    return this.http.get("http://localhost/spammer/rest/listaGrupoSpam.php")
      .map(HttpUtil.extractData)
      .catch(HttpUtil.handleError);
  }


  enviaCorreoGroup(mensaje:string,idGrupo:number):Observable<any> {
    return this.http.post("http://localhost/spammer/rest/enviarCorreoGrupoSpam.php",
      { mensaje, idGrupo }, HttpUtil.OPTIONS_DEFAULT)
      .map(HttpUtil.extractData)
      .catch(HttpUtil.handleError);
  }
  enviaCorreoListaGroup(mensaje: string,gruposCorreo: number[]):Observable<any> {
    return this.http.post("http://localhost/spammer/rest/enviarCorreoGruposSpam.php",
      { mensaje, gruposCorreo }, HttpUtil.OPTIONS_DEFAULT)
      .map(HttpUtil.extractData)
      .catch(HttpUtil.handleError);
  }

}
