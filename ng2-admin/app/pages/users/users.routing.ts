import { Routes, RouterModule }  from '@angular/router';

import { Users } from './users.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Users
  }
];

export const routing = RouterModule.forChild(routes);
