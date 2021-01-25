import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "@core/service/auth/auth.service";

import {modalSignedIn, modalAuthErrors} from "@utils/modal";
import {fadeIn} from "@utils/animation";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.sass"],
  animations: [fadeIn],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.buildForm();
  }

  ngOnInit() {}

  register(event: Event) {
    event.preventDefault();
    if (this.registerForm.valid) {
      const value = this.registerForm.value;
      const fullName = value.firstName + " " + value.lastName;
      this.authService
        .createUser(value.email, value.password, fullName)
        .then(() => {
          modalSignedIn(fullName).then(() => {
            this.authService.logOut();
            this.router.navigate(["/login"]);
          });
        })
        .catch((error) => {
          const errorMessage = error.message;
          const errorCode = error.code;
          switch (errorCode) {
            case "auth/email-already-in-use":
              modalAuthErrors(errorMessage);
              break;
            case "auth/invalid-email":
              modalAuthErrors(errorMessage);
              break;
            case "auth/operation-not-allowed":
              modalAuthErrors(errorMessage);
              break;
            case "auth/weak-password":
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
    this.registerForm = this.formBuilder.group({
      email: [
        "",
        [
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"),
        ],
      ],
      password: [
        "",
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(10),
        ],
      ],
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
    });
  }

  get registerFormEmail() {
    return this.registerForm.get("email");
  }
  get registerFormPassword() {
    return this.registerForm.get("password");
  }
}
