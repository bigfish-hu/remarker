import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { GlobalState } from '../../../global.state';
import { AuthService } from '../../../services/auth.service';
import { UserService } from '../../../services/user.service';

import { User } from '../../../models/user.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'ba-page-top',
  styles: [require('./baPageTop.scss')],
  template: require('./baPageTop.html'),
  encapsulation: ViewEncapsulation.None
})
export class BaPageTop {

  public isScrolled: boolean = false;
  public isMenuCollapsed: boolean = false;
  public user: User;

  constructor(
    private _state: GlobalState,
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {}

  public toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
  }

  public scrolledChanged(isScrolled) {
    this.isScrolled = isScrolled;
  }

  public logOut() {
    this.authService.logout();
    this.userService.clearUser();
    this.router.navigate([this.authService.loginRoute]);
  }

  ngOnInit() {
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });

    this.userService.getUser().subscribe((user) => { this.user = user; });
  }
}
