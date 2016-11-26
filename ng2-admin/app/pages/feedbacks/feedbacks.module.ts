import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { Feedbacks } from './feedbacks.component';
import { routing } from './feedbacks.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    Feedbacks
  ],
  providers: [
  ]
})
export default class FeedbacksModule {}
