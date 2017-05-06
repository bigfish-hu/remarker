import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { AuthService } from './services/auth.service';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ApiService } from './services/api.service';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';
import { ToastrService } from './services/toastr.service';
import { UserService } from './services/user.service';
import * as jQuery from 'jquery';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { AppState } from './app.service';
import { GlobalState } from './global.state';
import { PagesModule } from './pages/pages.module';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp( new AuthConfig({}), http, options);
}

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    PagesModule,
    routing,
    SlimLoadingBarModule.forRoot(),
    ToasterModule
  ],
  providers: [
    AppState,
    GlobalState,
    AuthService,
    ApiService,
    ToastrService,
    UserService,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [ Http, RequestOptions ]
    }
  ],
})
export class AppModule {}
