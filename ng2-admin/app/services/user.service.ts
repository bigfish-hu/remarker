import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { User } from '../models/user.model';
import { ApiService } from './api.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';

@Injectable()
export class UserService {
  private user: User;
  private url: string = '/api/users/me';

  constructor(private http: ApiService) {}

  public isUserSet(): boolean {
    return !!this.user;
  }

  getMe(force: boolean = false): Observable<User> {
    if (force || !this.isUserSet()) {
      return this.http.get(this.url)
        .map(res => { return this.extractUser(res); })
        .do((data) => {
          this.user = data;
        });
    }

    return Observable.of(this.user);
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
    user.isSuperadmin = res.is_superadmin;
    user.createdAt = res.created_at;
    user.updatedAt = res.updated_at;

    return user;
  }

}
