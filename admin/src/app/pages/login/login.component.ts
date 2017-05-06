import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

import 'style-loader!./login.scss';

@Component({
  selector: 'login',
  templateUrl: './login.html',
})
export class Login {

  public form: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;
  public submitted = false;

  constructor(
      fb: FormBuilder,
      private authService: AuthService,
      private router: Router
  ) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  public onSubmit(values: Object): void {
    this.submitted = true;
    if (this.form.valid) {
      this.authService.login(values)
          .subscribe(() => {
            this.router.navigate([this.authService.redirectRoute]);
        }, (error) => {});
    }
  }
}
