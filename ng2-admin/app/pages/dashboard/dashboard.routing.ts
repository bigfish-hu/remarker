import { Routes, RouterModule }  from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { Dashboard } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: Dashboard
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
