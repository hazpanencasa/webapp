import {Component, OnInit} from "@angular/core";
import {Validators, FormGroup, FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "@core/service/auth/auth.service";

import Swal from "sweetalert2";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.sass"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hide = true;
  toggleButton = true;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.buildForm();
  }

  ngOnInit(): void {}

  onChangeDisplay(event: Event) {
    event.preventDefault();
    this.toggleButton = !this.toggleButton;
  }

  navigateRegister(event: Event) {
    event.preventDefault();
    this.router.navigate(["auth/register"]);
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
        .login(value.email, value.password)
        .then(() => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Bienvenido a Pan en Casa",
            showConfirmButton: false,
            timer: 1500,
          });
          this.router.navigate(["/home"]);
        })
        .catch((err) => {
          if (value.invalid) {
            Swal.fire({
              title: "Opss, no estas registrado",
              text: "Te gustaria hacer pan en desde tu casa?",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Registrate ahora 🙋",
              backdrop: `
                rgba(0,0,123,0.4)
                url("https://i.gifer.com/uI7.gif")
            `,
            }).then((result) => {
              if (result.isConfirmed) {
                this.router.navigate(["auth/register"]);
              }
            });
          } else {
            console.log(err);
          }
        });
    } else {
      this.loginForm.markAsDirty();
    }
  }

  private buildForm() {
    this.loginForm = this.formBuilder.group({
      email: [
        "",
        [
          Validators.required,
          Validators.email,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"),
        ],
      ],
      password: [
        "",
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(10),
        ],
      ],
    });
  }
  get loginFormEmail() {
    return this.loginForm.get("email");
  }
  get loginFormPassword() {
    return this.loginForm.get("password");
  }
}
