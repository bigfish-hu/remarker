import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
import { AuthGuard } from '../services/auth-guard.service';
import { ResolveMe } from '../services/resolve-me.service';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  { path: 'login', loadChildren: () => System.import('./login/login.module') },
  { path: 'not-found', loadChildren: () => System.import('./not-found/not-found.module') },
  {
    path: '',
    component: Pages,
    canActivate: [AuthGuard],
    resolve: {
      me: ResolveMe
    },
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: () => System.import('./dashboard/dashboard.module') },
      { path: 'feedbacks', loadChildren: () => System.import('./feedbacks/feedbacks.module') },
      { path: 'projects', loadChildren: () => System.import('./projects/projects.module') },
      { path: 'users', loadChildren: () => System.import('./users/users.module') },
      { path: 'profile', loadChildren: () => System.import('./profile/profile.module') },
      { path: 'settings', loadChildren: () => System.import('./settings/settings.module') }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
