import { Routes, RouterModule }  from '@angular/router';

import { Projects } from './projects.component';

const routes: Routes = [
  {
    path: '',
    component: Projects
  }
];

export const routing = RouterModule.forChild(routes);
