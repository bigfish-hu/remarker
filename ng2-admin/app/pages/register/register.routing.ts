import { Routes, RouterModule }  from '@angular/router';

import { Register } from './register.component';

const routes: Routes = [
  {
    path: '',
    component: Register
  }
];

export const routing = RouterModule.forChild(routes);
