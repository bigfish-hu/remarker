import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'profile',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./profile.scss')],
  template: require('./profile.html')
})
export class Profile {

  constructor() {
  }

}
