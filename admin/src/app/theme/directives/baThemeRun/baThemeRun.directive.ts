import { Directive, HostBinding } from '@angular/core';

import { BaThemeConfigProvider, isMobile } from '../../../theme';

@Directive({
  selector: '[baThemeRun]'
})
export class BaThemeRun {

  @HostBinding('class') classesString: string;
  private _classes: string[] = [];

  constructor(private _baConfig: BaThemeConfigProvider) {
  }

  public ngOnInit(): void {
    this._assignTheme();
    this._assignMobile();
  }

  private _assignTheme(): void {
    this._addClass(this._baConfig.get().theme.name);
  }

  private _assignMobile(): void {
    if (isMobile()) {
      this._addClass('mobile');
    }
  }

  private _addClass(cls: string) {
    this._classes.push(cls);
    this.classesString = this._classes.join(' ');
  }
}
