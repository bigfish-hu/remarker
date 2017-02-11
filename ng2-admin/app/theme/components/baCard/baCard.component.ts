import { Component, ViewEncapsulation, ViewChild, Input } from '@angular/core';

// import 'style-loader!./baCard.scss';

@Component({
  selector: 'ba-card',
  templateUrl: './baCard.html',
})
export class BaCard {
  @Input() title: String;
  @Input() baCardClass: String;
}
