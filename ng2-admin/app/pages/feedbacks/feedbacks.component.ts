import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'feedbacks',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./feedbacks.scss')],
  template: require('./feedbacks.html')
})
export class Feedbacks {

  constructor() {
  }

}
