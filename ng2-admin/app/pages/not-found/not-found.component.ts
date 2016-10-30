import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'not-found',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./not-found.scss')],
  template: require('./not-found.html'),
})
export class NotFound {
  constructor() {
  }
}
