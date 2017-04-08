import { Routes, RouterModule }  from '@angular/router';

import { Users } from './users.component';

const routes: Routes = [
  {
    path: '',
    component: Users
  }
];

export const routing = RouterModule.forChild(routes);
