import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service';

import { User } from '../models/user.model';
import { Response } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  user: User;
  redirectRoute: string = '/pages/dashboard';
  loginRoute: string = '/login';
  private loginUrl: string = '/api/auth/login';
  private tokenName: string = 'id_token';

  constructor(private http: ApiService) {}

  loggedIn() {
    return tokenNotExpired(this.tokenName);
  }

  login(values: Object) {
    return this.http.post(this.loginUrl, values)
    .map((response) => {this.extractToken(response);});
  }

  logout = () => {
    localStorage.removeItem(this.tokenName);
  };

  extractToken = (res: Object) => {
    if (typeof res.data.token !== 'undefined') {
      this.saveToken(res.data.token);
    }
  };

  saveToken(token: string) {
    localStorage.setItem(this.tokenName, token);
  }
}
