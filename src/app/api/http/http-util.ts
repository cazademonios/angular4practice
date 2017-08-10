import { Observable } from 'rxjs/Observable';
import {Response, Headers, RequestOptions} from '@angular/http';

export class HttpUtil {
  static readonly HEADER_JSON = new Headers({ 'Content-Type': 'application/json' });

  static readonly OPTIONS_DEFAULT = new RequestOptions({ headers: HttpUtil.HEADER_JSON });

  static handleError (error: Response|any) {
    console.log(error.text());
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
  static extractData(res: Response) {
    let body = res.json();
    return body || { };
  }
  static extractDataText(resp:Response){
    return resp.text() || {};
  }

}
