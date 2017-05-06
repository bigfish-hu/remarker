import { AfterViewInit, Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GlobalState } from '../../../global.state';
import { layoutSizes } from '../../../theme';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-ba-sidebar',
  templateUrl: './baSidebar.html',
  styleUrls: ['./baSidebar.scss']
})
export class BaSidebarComponent implements OnInit, AfterViewInit {
  public menuHeight: number;
  public isMenuCollapsed = false;
  public isMenuShouldCollapsed = false;
  public user: User;

  constructor(
    private _elementRef: ElementRef,
    private _state: GlobalState,
    private route: ActivatedRoute
  ) {
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }

  public ngOnInit(): void {
    if (this._shouldMenuCollapse()) {
      this.menuCollapse();
    }
    this.route.data.subscribe((data: any) => { this.user = data.me; });
  }

  public ngAfterViewInit(): void {
    setTimeout(() => this.updateSidebarHeight());
  }

  @HostListener('window:resize')
  public onWindowResize(): void {

    const isMenuShouldCollapsed = this._shouldMenuCollapse();

    if (this.isMenuShouldCollapsed !== isMenuShouldCollapsed) {
      this.menuCollapseStateChange(isMenuShouldCollapsed);
    }
    this.isMenuShouldCollapsed = isMenuShouldCollapsed;
    this.updateSidebarHeight();
  }

  public menuExpand(): void {
    this.menuCollapseStateChange(false);
  }

  public menuCollapse(): void {
    this.menuCollapseStateChange(true);
  }

  public menuCollapseStateChange(isCollapsed: boolean): void {
    this.isMenuCollapsed = isCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
  }

  public updateSidebarHeight(): void {
    this.menuHeight = this._elementRef.nativeElement.childNodes[0].clientHeight - 84;
  }

  private _shouldMenuCollapse(): boolean {
    return window.innerWidth <= layoutSizes.resWidthCollapseSidebar;
  }
}
