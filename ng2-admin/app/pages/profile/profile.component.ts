import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { EmailValidator, EqualPasswordsValidator } from '../../theme/validators';
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
  public oldPassword: AbstractControl;
  public newPassword1: AbstractControl;
  public newPassword2: AbstractControl;
  public passwordForm: FormGroup;
  public newPasswords: FormGroup;

  constructor(private route: ActivatedRoute, fb: FormBuilder) {
    this.passwordForm = fb.group({
      'oldPassword': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'newPasswords': fb.group({
        'newPassword1': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        'newPassword2': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    }, {validator: EqualPasswordsValidator.validate('newPassword1', 'newPassword2')})
  });
    this.oldPassword = this.passwordForm.controls['oldPassword'];
    this.newPasswords = <FormGroup> this.passwordForm.controls['newPasswords'];
    this.newPassword1 = this.newPasswords.controls['newPassword1'];
    this.newPassword2 = this.newPasswords.controls['newPassword2'];
  }

  public ngOnInit(): void {
    this.route.data.subscribe((data: any) => { this.user = data.me; });
  }

  public submitUserForm() {
  }

  public submitPasswordForm() {

  }

}
