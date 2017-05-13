import {Component, OnInit} from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { EqualPasswordsValidator } from '../../theme/validators';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.html'
})
export class ProfileComponent implements OnInit {
  public user: User;
  public oldPassword: AbstractControl;
  public newPassword1: AbstractControl;
  public newPassword2: AbstractControl;
  public passwordForm: FormGroup;
  public newPasswords: FormGroup;
  public userForm: FormGroup;

  constructor(private route: ActivatedRoute, fb: FormBuilder, private userService: UserService ) {
    this.passwordForm = fb.group({
      oldPassword: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      newPasswords: fb.group({
        newPassword1: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
        newPassword2: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    }, {validator: EqualPasswordsValidator.validate('newPassword1', 'newPassword2')})
  });
    this.oldPassword = this.passwordForm.controls.oldPassword;
    this.newPasswords = this.passwordForm.controls.newPasswords as FormGroup;
    this.newPassword1 = this.newPasswords.controls.newPassword1;
    this.newPassword2 = this.newPasswords.controls.newPassword2;
  }

  public ngOnInit(): void {
    this.route.data.subscribe((data: any) => { this.user = data.me; });
  }

  public submitUserForm() {
    this.userService.updateMe(this.user).subscribe((data: any) => { this.user = data || this.user; });
  }

  public submitPasswordForm() {
    this.userService.changePassword(
        this.oldPassword.value, this.newPassword1.value, this.newPassword2.value
    ).subscribe();
  }
}
