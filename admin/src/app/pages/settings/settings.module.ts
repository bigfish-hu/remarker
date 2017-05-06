import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { SettingsComponent } from './settings.component';
import { routing } from './settings.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    SettingsComponent
  ],
  providers: [
  ]
})
export class SettingsModule {}
