import { Routes, RouterModule }  from '@angular/router';

import { Feedbacks } from './feedbacks.component';

const routes: Routes = [
  {
    path: '',
    component: Feedbacks
  }
];

export const routing = RouterModule.forChild(routes);
