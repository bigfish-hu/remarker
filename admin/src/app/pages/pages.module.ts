import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { routing }       from './pages.routing';
import { NgaModule } from '../theme/nga.module';
import { GoTopButtonModule } from 'ng2-go-top-button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Pages } from './pages.component';
import { AuthGuard } from '../services/auth-guard.service';
import { ResolveMe } from '../services/resolve-me.service';

@NgModule({
  imports: [
    CommonModule,
    NgaModule,
    routing,
    GoTopButtonModule,
    BrowserAnimationsModule
  ],
  declarations: [Pages],
  providers: [AuthGuard, ResolveMe]
})
export class PagesModule {
}
