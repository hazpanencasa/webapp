import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '@core/service/auth/auth.service';

import { modalSignedIn, modalAuthErrors } from '@utils/modal';
import { fadeIn } from '@utils/animation';
import { MyValidators } from '@utils/custom-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'],
  animations: [fadeIn],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.onBuildForm();
  }

  ngOnInit() {}

  onRegister(event: Event) {
    event.preventDefault();
    if (this.registerForm.valid) {
      const value = this.registerForm.value;
      const fullName = value.firstName + ' ' + value.lastName;
      const passwordConfirm = value.password.confirm;
      this.authService
        .createUser(value.email, passwordConfirm, fullName)
        .then(() => {
          modalSignedIn(fullName).then(() => {
            this.authService.logOut();
            this.router.navigate(['/', 'login']);
          });
        })
        .catch((error) => {
          const errorMessage = error.message;
          const errorCode = error.code;
          switch (errorCode) {
            case 'auth/email-already-in-use':
              modalAuthErrors(errorMessage);
              break;
            case 'auth/invalid-email':
              modalAuthErrors(errorMessage);
              break;
            case 'auth/operation-not-allowed':
              modalAuthErrors(errorMessage);
              break;
            case 'auth/weak-password':
              modalAuthErrors(errorMessage);
              break;
            default:
              modalAuthErrors(errorMessage);
              break;
          }
        });
    }
  }

  private onBuildForm() {
    this.registerForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ],
      ],
      password: new FormGroup(
        {
          password: new FormControl('', [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(10),
          ]),
          confirm: new FormControl('', [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(10),
          ]),
        },
        [Validators.required, MyValidators.isConfirmed]
      ),
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
    });
  }

  get lastName() {
    return this.registerForm.get('lastName');
  }
  get firstName() {
    return this.registerForm.get('firstName');
  }

  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }
}
