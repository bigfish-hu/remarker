import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
  BaThemeConfig
} from './theme.config';

import {
  BaThemeConfigProvider
} from './theme.configProvider';

import {
  BaBackTop,
  BaCard,
  BaCheckbox,
  BaContentTop,
  BaMsgCenter,
  BaMultiCheckbox,
  BaPageTop,
  BaSidebar
} from './components';

import { BaCardBlur } from './components/baCard/baCardBlur.directive';

import {
  BaScrollPosition,
  BaThemeRun
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
  BaBackTop,
  BaCard,
  BaCheckbox,
  BaContentTop,
  BaMsgCenter,
  BaMultiCheckbox,
  BaPageTop,
  BaSidebar
];

const NGA_DIRECTIVES = [
  BaScrollPosition,
  BaThemeRun,
  BaCardBlur
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
    ReactiveFormsModule,
  ],
  providers: [
    BaThemeConfigProvider,
    BaThemeConfig,
    ...NGA_VALIDATORS,
    ...NGA_SERVICES
  ],
  exports: [
    ...NGA_DIRECTIVES,
    ...NGA_COMPONENTS
  ]
})
export class NgaModule {
}
