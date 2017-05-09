import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { ToastrService } from './toastr.service';

import { User } from '../models/user.model';
import { Response } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  user: User;
  redirectRoute = '/dashboard';
  loginRoute = '/login';
  private loginUrl = '/api/auth/login';
  private tokenName = 'id_token';

  constructor(private http: Http, private toastr: ToastrService) {}

  public loggedIn() {
    return tokenNotExpired(this.tokenName);
  }

  public login(values: Object) {
    return this.http.post(this.loginUrl, values)
    .map((response) => { this.saveToken(response); })
    .catch((error) => {
      this.toastr.error(error);
      return Observable.throw(error);
    });
  }

  public logout() {
    localStorage.removeItem(this.tokenName);
  }

  public saveToken(response: Response) {
    if (response.headers.has('Authorization')) {
      this.saveTokenToLocalStorage(response.headers.get('Authorization').substring(7));
    }
  }

  private saveTokenToLocalStorage(token: string) {
    localStorage.setItem(this.tokenName, token);
  }
}
