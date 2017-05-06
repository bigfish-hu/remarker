import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { ResolveMe } from '../../services/resolve-me.service';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    resolve: {
      me: ResolveMe
    },
  }
];

export const routing = RouterModule.forChild(routes);
