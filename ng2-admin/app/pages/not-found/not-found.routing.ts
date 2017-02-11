import { Routes, RouterModule }  from '@angular/router';

import { NotFound } from './not-found.component';

const routes: Routes = [
  {
    path: '',
    component: NotFound,
  }
];

export const routing = RouterModule.forChild(routes);
