import { Component } from '@angular/core';
import { BaMsgCenterService } from './baMsgCenter.service';

@Component({
  selector: 'app-ba-msg-center',
  providers: [BaMsgCenterService],
  templateUrl: './baMsgCenter.html',
  styleUrls: ['./baMsgCenter.scss']
})
export class BaMsgCenterComponent {
  public notifications: Object[];
  public messages: Object[];

  constructor(private _baMsgCenterService: BaMsgCenterService) {
    this.notifications = this._baMsgCenterService.getNotifications();
    this.messages = this._baMsgCenterService.getMessages();
  }
}
