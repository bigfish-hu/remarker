import { Injectable } from '@angular/core';

@Injectable()
export class BaMsgCenterService {

  private _notifications = [

  ];

  private _messages = [

  ];

  public getMessages(): Object[] {
    return this._messages;
  }

  public getNotifications(): Object[] {
    return this._notifications;
  }
}
