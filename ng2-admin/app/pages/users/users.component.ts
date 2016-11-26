import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'users',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./users.scss')],
  template: require('./users.html')
})
export class Users {

  constructor() {
  }

}
