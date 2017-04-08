import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Injectable()
export class LoginGuard implements CanActivate {
    private dashboardRoute: string = '/dashboard';

    constructor(private authService: AuthService, private router: Router) {}

    canActivate(): boolean {
        if (!this.authService.loggedIn()) { return true; }

        this.router.navigate([this.dashboardRoute]);
        return false;
    }
}
