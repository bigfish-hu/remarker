import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
import { AuthGuard } from '../services/auth-guard.service';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  { path: 'login', loadChildren: () => System.import('./login/login.module') },
  { path: 'not-found', loadChildren: () => System.import('./not-found/not-found.module') },
  {
    path: 'pages',
    component: Pages,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: () => System.import('./dashboard/dashboard.module') },
    ]
  }

];

export const routing = RouterModule.forChild(routes);
