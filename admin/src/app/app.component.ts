import './app.loader.ts';
import { Component, ViewEncapsulation } from '@angular/core';
import { GlobalState } from './global.state';
import { BaImageLoaderService, BaThemePreloader, BaThemeSpinner } from './theme/services';
import { layoutPaths } from './theme/theme.constants';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { Router, NavigationStart, NavigationEnd,
  NavigationCancel, NavigationError } from '@angular/router';

import 'style-loader!./app.scss';
import 'style-loader!./theme/initial.scss';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  template: `
      <ng2-slim-loading-bar></ng2-slim-loading-bar>
    <main [ngClass]="{'menu-collapsed': isMenuCollapsed}" baThemeRun>
      <div class="additional-bg"></div>
      <router-outlet></router-outlet>
      <toaster-container></toaster-container>
    </main>
  `
})
export class App {
  isMenuCollapsed = false;
  private sub: any;

  constructor(private _state: GlobalState,
              private _imageLoader: BaImageLoaderService,
              private _spinner: BaThemeSpinner,
              private router: Router,
              private slimLoader: SlimLoadingBarService,
  ) {
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });

    this.sub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.slimLoader.start();
      } else if ( event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError) {
        this.slimLoader.complete();
      }
    }, (error: any) => {
      this.slimLoader.complete();
    });
  }

  public ngAfterViewInit(): void {
    // hide spinner once all loaders are completed
    BaThemePreloader.load().then((values) => {
      this._spinner.hide();
    });
  }
  ngOnDestroy(): any {
    this.sub.unsubscribe();
  }
}
