import { Routes, RouterModule }  from '@angular/router';

import { Settings } from './settings.component';

const routes: Routes = [
  {
    path: '',
    component: Settings
  }
];

export const routing = RouterModule.forChild(routes);
