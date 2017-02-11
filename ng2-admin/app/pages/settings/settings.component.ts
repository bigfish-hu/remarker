import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'settings',
  encapsulation: ViewEncapsulation.None,
  styles: ['settings.scss'],
  template: require('./settings.html')
})
export class Settings {

  constructor() {
  }

}
