import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { GlobalState } from '../../../global.state';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'ba-page-top',
  styles: [require('./baPageTop.scss')],
  template: require('./baPageTop.html'),
  encapsulation: ViewEncapsulation.None
})
export class BaPageTop {

  public isScrolled: boolean = false;
  public isMenuCollapsed: boolean = false;

  constructor(
    private _state: GlobalState,
    private authService: AuthService,
    private router: Router
  ) {
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }

  public toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
  }

  public scrolledChanged(isScrolled) {
    this.isScrolled = isScrolled;
  }

  public logOut() {
    this.authService.logout();
    this.router.navigate([this.authService.loginRoute]);
  }
}
