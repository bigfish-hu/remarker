import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Injectable()
export class LoginGuard implements CanActivate {
    private dashboardRoute: string = '/pages/dashboard';

    constructor(private authService: AuthService, private router: Router) {}

    canActivate(): boolean {
        if (!this.authService.loggedIn()) { return true; }

        this.router.navigate([this.dashboardRoute]);
        return false;
    }
}
