import { Injectable } from '@angular/core';
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const url: string = state.url;

        return this.checkLogin(url);
    }

    checkLogin(url: string): boolean {
        if (this.authService.loggedIn()) { return true; }

        // Store the attempted URL for redirecting
        this.authService.redirectRoute = url;

        // Navigate to the login page with extras
        this.router.navigate([this.authService.loginRoute]);
        return false;
    }
}
