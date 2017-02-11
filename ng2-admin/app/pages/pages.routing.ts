import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
import { AuthGuard } from '../services/auth-guard.service';
import { ResolveMe } from '../services/resolve-me.service';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  { path: 'login', loadChildren: 'app/pages/login/login.module#LoginModule' },
  { path: 'register', loadChildren: 'app/pages/register/register.module' },
  { path: 'not-found', loadChildren: 'app/pages/not-found/not-found.module' },
  {
    path: '',
    component: Pages,
    canActivate: [AuthGuard],
    resolve: {
      me: ResolveMe
    },
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: 'app/pages/dashboard/dashboard.module' },
      { path: 'feedbacks', loadChildren: 'app/pages/feedbacks/feedbacks.module' },
      { path: 'projects', loadChildren: 'app/pages/projects/projects.module' },
      { path: 'users', loadChildren: 'app/pages/users/users.module' },
      { path: 'profile', loadChildren: 'app/pages/profile/profile.module' },
      { path: 'settings', loadChildren: 'app/pages/settings/settings.module' }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
