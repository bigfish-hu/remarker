import { Routes, RouterModule } from '@angular/router';

import { FeedbacksComponent } from './feedbacks.component';

const routes: Routes = [
  {
    path: '',
    component: FeedbacksComponent
  }
];

export const routing = RouterModule.forChild(routes);
