import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
  BaThemeConfigProvider
} from './theme.configProvider';

import {
  BaBackTopComponent,
  BaCardComponent,
  BaMsgCenterComponent,
  BaPageTopComponent,
  BaSidebarComponent
} from './components';

import { BaCardBlurDirective } from './components/baCard/baCardBlur.directive';

import {
  BaScrollPositionDirective,
  BaThemeRunDirective
} from './directives';

import {
  BaImageLoaderService,
  BaThemePreloader,
  BaThemeSpinner
} from './services';

import {
  EmailValidator,
  EqualPasswordsValidator
} from './validators';

const NGA_COMPONENTS = [
  BaBackTopComponent,
  BaCardComponent,
  BaMsgCenterComponent,
  BaPageTopComponent,
  BaSidebarComponent
];

const NGA_DIRECTIVES = [
  BaScrollPositionDirective,
  BaThemeRunDirective,
  BaCardBlurDirective
];

const NGA_SERVICES = [
  BaImageLoaderService,
  BaThemePreloader,
  BaThemeSpinner
];

const NGA_VALIDATORS = [
  EmailValidator,
  EqualPasswordsValidator
];

@NgModule({
  declarations: [
    ...NGA_DIRECTIVES,
    ...NGA_COMPONENTS
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    BaThemeConfigProvider,
    ...NGA_VALIDATORS,
    ...NGA_SERVICES
  ],
  exports: [
    ...NGA_DIRECTIVES,
    ...NGA_COMPONENTS
  ]
})
export class NgaModule {}
