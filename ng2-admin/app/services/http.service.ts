import {Injectable} from '@angular/core';
import {Http, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpService extends Http {

  constructor (backend: XHRBackend, options: RequestOptions) {
    super(backend, options);
  }

  request(url: string|Request, options?: RequestOptionsArgs): Observable<Response> {
    let token = localStorage.getItem('auth_token');
    if (typeof url === 'string') { // meaning we have to add the token to the options, not in url
      if (!options) {
        // let's make option object
        options = {headers: new Headers()};
      }
      options.headers.set('Authorization', `Bearer ${token}`);
    } else {
    // we have to add the token to the url object
      url.headers.set('Authorization', `Bearer ${token}`);
    }
    return super.request(url, options).catch((error) => {
      return this.handleError(error);
    });
  }

  private handleError(error: Response | any) {
    if (error instanceof Response) {
      const body = error.json() || '';
      this.toastr.pop('error', error.statusText, body.error || JSON.stringify(body));
    } else {
      this.toastr.pop('error', error.statusText || '', error.message || error.toString());
    }
    return Observable.throw(error);
  }
}
