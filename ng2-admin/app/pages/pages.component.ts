import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'pages',
  template: `
    <ba-sidebar></ba-sidebar>
    <ba-page-top></ba-page-top>
    <div class="al-main">
      <div class="al-content">
        <router-outlet></router-outlet>
      </div>
    </div>
    <footer class="al-footer clearfix">

    </footer>
    <ba-back-top position="200"></ba-back-top>
    `
})
export class Pages {

  constructor() {
  }

  ngOnInit() {
  }
}
