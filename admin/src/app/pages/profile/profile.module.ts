import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { ProfileComponent } from './profile.component';
import { routing } from './profile.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    ProfileComponent
  ],
  providers: [
  ]
})
export class ProfileModule {}
