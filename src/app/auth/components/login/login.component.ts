import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '@core/service/auth/auth.service';

import { modalWelcome, modalAuthErrors } from '@utils/modal';
import { fadeIn } from '@utils/animation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  animations: [fadeIn],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hide = true;

  public user: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.buildForm();
  }

  ngOnInit(): void {}

  navigateRegister(event: Event) {
    event.preventDefault();
    this.router.navigate(['/', 'login', 'register']);
  }

  handleClick(event: Event) {
    event.preventDefault();
    this.hide = !this.hide;
  }

  login(event: Event) {
    event.preventDefault();
    if (this.loginForm.valid) {
      const value = this.loginForm.value;
      this.authService
        .logIn(value.email, value.password)
        .then((result) => {
          modalWelcome(result.user.displayName);
          this.router.navigate(['/', 'home']);
        })
        .catch((error) => {
          const errorMessage = error.message;
          const errorCode = error.code;
          switch (errorCode) {
            case 'auth/wrong-password':
              modalAuthErrors(errorMessage);
              break;
            case 'auth/invalid-email':
              modalAuthErrors(errorMessage);
              break;
            case 'auth/user-disabled':
              modalAuthErrors(errorMessage);
              break;
            case 'auth/user-not-found':
              modalAuthErrors(errorMessage);
              break;
            default:
              modalAuthErrors(errorMessage);
              break;
          }
        });
    }
  }

  private buildForm() {
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(10),
        ],
      ],
    });
  }
  get loginFormEmail() {
    return this.loginForm.get('email');
  }
  get loginFormPassword() {
    return this.loginForm.get('password');
  }
}
