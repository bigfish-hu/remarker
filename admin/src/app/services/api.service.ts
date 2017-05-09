import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers, Response, RequestOptions } from '@angular/http';
import { ToastrService } from './toastr.service';
import { AuthHttp } from 'angular2-jwt';
import { AuthService } from './auth.service';

import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  private headers: Headers;

  constructor(private http: AuthHttp, private toastr: ToastrService, private authService: AuthService) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
  }

  public post(url: string, data: Object, headers: Object = {}): Observable<Response> {

    const options = new RequestOptions({ headers: this.headers});

    return this.http.post(url, JSON.stringify(data), options)
      .map((response: Response) => {
        this.authService.saveToken(response);
        return response.json() as Response;
      })
      .catch((error) => {
        this.toastr.error(error);
        return Observable.throw(error);
      });
  }

  public get(url: string, headers: Object = {}): Observable<Response> {

    const options = new RequestOptions({ headers: this.headers});

    return this.http.get(url, options)
      .map((response: Response) => {
        this.authService.saveToken(response);
        return response.json() as Response;
      })
      .catch((error) => {
        this.toastr.error(error);
        return Observable.throw(error);
      });
  }

  public put(url: string, data: Object, headers: Object = {}): Observable<Response> {

    const options = new RequestOptions({ headers: this.headers});

    return this.http.put(url, JSON.stringify(data), options)
        .map((response: Response) => {
            this.authService.saveToken(response);
            return response.json() as Response;
        })
        .catch((error) => {
          this.toastr.error(error);
          return Observable.throw(error);
        });
  }
}
