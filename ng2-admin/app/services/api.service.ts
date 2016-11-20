import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { ToasterService } from 'angular2-toaster/angular2-toaster';

import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  private headers: Headers;

  constructor(private http: Http, @Inject(ToasterService) public toastr: ToasterService) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
  }

  public post(url: string, data: Object, headers: Object = {}): Observable<Response> {

    let options = new RequestOptions({ headers: this.headers});

    return this.http.post(url, JSON.stringify(data), options)
      .map((response: Response) => <Response>response.json())
      .catch((error) => {
        return this.handleError(error);
      });
  }

  public setHeader(name: string, value: string) {
    this.headers.append(name, value);
    return this;
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
