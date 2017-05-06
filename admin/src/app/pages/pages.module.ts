import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './pages.routing';
import { NgaModule } from '../theme/nga.module';

import { PagesComponent } from './pages.component';
import { AuthGuard } from '../services/auth-guard.service';
import { ResolveMe } from '../services/resolve-me.service';

@NgModule({
  imports: [
    CommonModule,
    NgaModule,
    routing
  ],
  declarations: [PagesComponent],
  providers: [AuthGuard, ResolveMe]
})
export class PagesModule {}
