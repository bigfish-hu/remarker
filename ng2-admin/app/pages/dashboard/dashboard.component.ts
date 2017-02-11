import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'dashboard',
  encapsulation: ViewEncapsulation.None,
  styles: ['dashboard.scss'],
  template: require('./dashboard.html')
})
export class Dashboard {

  constructor() {
  }

}
