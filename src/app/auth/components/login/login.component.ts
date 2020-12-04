import {Component, OnInit} from "@angular/core";
import {Validators, FormGroup, FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../core/service/auth/auth.service";

import Swal from "sweetalert2";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.sass"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hide = true;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.buildForm();
  }

  ngOnInit(): void {}

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
        .catch(() => {
          if (this.loginForm.valid) {
            Swal.fire({
              title: "Opss no estas registrado",
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
          }
        });
    }
  }
  private buildForm() {
    this.loginForm = this.formBuilder.group({
      email: [
        "",
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"),
      ],
      password: ["", Validators.minLength(8)],
    });
  }
}
