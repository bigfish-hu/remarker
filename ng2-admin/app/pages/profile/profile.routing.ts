import { Routes, RouterModule }  from '@angular/router';

import { Profile } from './profile.component';
import { ResolveMe } from '../../services/resolve-me.service';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Profile,
    resolve: {
      me: ResolveMe
    },
  }
];

export const routing = RouterModule.forChild(routes);
