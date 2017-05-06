import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { LoginGuard } from './login-guard.service';

const routes: Routes = [
  {
    path: '',
    canActivate: [LoginGuard],
    component: LoginComponent
  }
];

export const routing = RouterModule.forChild(routes);
