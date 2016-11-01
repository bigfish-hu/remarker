import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';

import { User } from '../models/user';

import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
    user: User;
    redirectRoute: string = '/pages/dashboard';
    loginRoute: string = '/login';
    private loginUrl: string = '/api/auth/login';
    private tokenName: string = 'id_token';

    constructor(private http: Http) {}

    loggedIn() {
        return tokenNotExpired(this.tokenName);
    }

    login(values: Object): Observable<User> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.loginUrl, JSON.stringify(values), options)
            .map(this.extractUser)
            .catch(this.handleError);
    }

    logout = () => {
        localStorage.removeItem(this.tokenName);
    }

    extractUser = (res: Response) => {
        let data = res.json().data;

        if (typeof data.token !== 'undefined') {
            this.saveToken(data.token);
        }

        return data.user || { };
    }

    saveToken(token: string) {
        localStorage.setItem(this.tokenName, token);
    }

    private handleError(error: Response | any) {
        let errMsg: Object;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = {title: error.statusText, text: err};
        } else {
            errMsg = {title: '', text: error.message ? error.message : error.toString()};
        }

        return Observable.throw(errMsg);
    }
}
