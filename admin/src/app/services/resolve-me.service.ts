import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from './user.service';
import { User } from '../models/user.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ResolveMe implements Resolve<User> {

  constructor(private userService: UserService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    return this.userService.getMe();
  }
}
