import { Component, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-ba-card',
  templateUrl: './baCard.html',
  styleUrls: ['./baCard.scss']
})
export class BaCardComponent {
  @Input() title: String;
  @Input() baCardClass: String;
}
