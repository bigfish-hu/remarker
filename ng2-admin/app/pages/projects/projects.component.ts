import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'projects',
  encapsulation: ViewEncapsulation.None,
  styles: ['projects.scss'],
  template: require('./projects.html')
})
export class Projects {

  constructor() {
  }

}
