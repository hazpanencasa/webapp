import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "@core/service/auth/auth.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.sass"],
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
      this.authService
        .createUser(value.email, value.password)
        .then(() => {
          this.authService.logOut();
          Swal.fire({
            html:
              '<h1 style="color: white; margin: 0;"> Thanks for Sign In </h1>',
            width: 400,
            padding: "3em",
            confirmButtonColor: "#f5a637",
            icon: "success",
            background: "url(https://i.gifer.com/uI7.gif) no-repeat 50% 50%",
            confirmButtonText: "Please, log In",
          }).then(() => {
            this.router.navigate(["/login"]);
          });
        })
        .catch((error) => {
          if (this.registerForm.valid) {
            Swal.fire({
              icon: "error",
              title: `${error}`,
              text: "Something went wrong!",
              confirmButtonText: "Try Again with Another Email",
              confirmButtonColor: "#f5a637",
            });
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
    });
  }

  get registerFormEmail() {
    return this.registerForm.get("email");
  }
  get registerFormPassword() {
    return this.registerForm.get("password");
  }
}
