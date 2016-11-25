import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { User } from '../models/user.model';
import { ApiService } from './api.service';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  private user: User;
  private url: string = '/api/users/me';

  constructor(private http: ApiService){}

  public isUserSet(): boolean {
    return !!this.user;
  }

  getUser(force: boolean = false): Observable<User> {
    if (force || !this.isUserSet()) {
      return this.http.get(this.url)
        .map((response: Object) => {
          this.user = this.extractUser(response);
          return this.user;
        });
    }

    return Observable.create(this.user);
  }

  clearUser() {
    if (this.isUserSet()) {
      this.user = undefined;
    }
  }

  extractUser(response): User {
    let res = response.data.user;
    let user = new User();

    user.id = res.id;
    user.name = res.name;
    user.email = res.email;
    user.isSuperadmin = res.iisSuperadmind;
    user.createdAt = res.createdAt;
    user.updatedAt = res.updatedAt;

    return user;
  }

}
