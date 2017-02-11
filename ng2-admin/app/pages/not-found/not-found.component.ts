import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'not-found',
  encapsulation: ViewEncapsulation.None,
  styles: ['not-found.scss'],
  template: 'not-found.html',
})
export class NotFound {
  constructor() {
  }
}
