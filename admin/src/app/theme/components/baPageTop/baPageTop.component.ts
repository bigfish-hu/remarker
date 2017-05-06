import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GlobalState } from '../../../global.state';
import { AuthService } from '../../../services/auth.service';
import { UserService } from '../../../services/user.service';

import { User } from '../../../models/user.model';

@Component({
  selector: 'app-ba-page-top',
  templateUrl: './baPageTop.html',
  styleUrls: ['./baPageTop.scss']
})
export class BaPageTopComponent implements OnInit {

  public isScrolled = false;
  public isMenuCollapsed = false;
  public user: User;

  constructor(
    private _state: GlobalState,
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
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

    this.route.data.subscribe((data: any) => { this.user = data.me; });
  }
}
