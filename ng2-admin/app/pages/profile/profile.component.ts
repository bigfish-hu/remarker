import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user.model';

@Component({
  selector: 'profile',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./profile.scss')],
  template: require('./profile.html')
})
export class Profile {
  public user: User;
  public password = {
    oldPassword: '',
    newPassword1: '',
    newPassword2: '',
  };

  constructor(private route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.route.data.subscribe((data: any) => { this.user = data.me; });
  }

  public onSubmit() {
  }

}
