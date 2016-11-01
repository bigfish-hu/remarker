import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { routing }       from './pages.routing';
import { NgaModule } from '../theme/nga.module';

import { Pages } from './pages.component';
import { AuthGuard } from '../auth/auth-guard.service';
import { AuthService } from '../auth/auth.service';

@NgModule({
  imports: [CommonModule, NgaModule, routing],
  declarations: [Pages],
  providers: [AuthGuard, AuthService]
})
export class PagesModule {
}
