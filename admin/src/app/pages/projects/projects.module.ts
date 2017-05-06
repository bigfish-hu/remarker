import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { ProjectsComponent } from './projects.component';
import { routing } from './projects.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    ProjectsComponent
  ],
  providers: [
  ]
})
export class ProjectsModule {}
