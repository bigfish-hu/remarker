import { Routes, RouterModule }  from '@angular/router';

import { Login } from './login.component';
import { LoginGuard } from './login-guard.service';

const routes: Routes = [
  {
    path: '',
    canActivate: [LoginGuard],
    component: Login
  }
];

export const routing = RouterModule.forChild(routes);
