import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers, Response, RequestOptions } from '@angular/http';
import { ToastrService } from './toastr.service';
import { AuthHttp } from 'angular2-jwt';

import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  private headers: Headers;

  constructor(private http: AuthHttp, private toastr: ToastrService) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
  }

  public post(url: string, data: Object, headers: Object = {}): Observable<Response> {

    let options = new RequestOptions({ headers: this.headers});

    return this.http.post(url, JSON.stringify(data), options)
      .map((response: Response) => <Response>response.json())
      .catch((error) => {
        this.toastr.error(error);
        return Observable.throw(error);
      });
  }

  public setHeader(name: string, value: string) {
    this.headers.append(name, value);
    return this;
  }

}
