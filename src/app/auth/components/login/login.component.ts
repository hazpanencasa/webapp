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
  public user: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.buildForm();
  }

  async ngOnInit() {
    this.user = await this.authService.getCurrentUser();
    if (this.user) {
      console.log("hola", this.user);
    }
  }

  onChangeDisplay(event: Event) {
    event.preventDefault();
    this.toggleButton = !this.toggleButton;
  }

  navigateRegister(event: Event) {
    event.preventDefault();
    this.router.navigate(["/register"]);
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
          this.router.navigate(["home"]);
        })
        .catch((error) => {
          let errorCode = error.code;
          let errorMessage = error.message;
          switch (errorCode) {
            case "auth/wrong-password":
              Swal.fire({
                title: "Opss, wrong-password",
                icon: "warning",
              });
              break;
            case "auth/invalid-email":
              Swal.fire({
                title: "Opss, invalid-email",
                icon: "warning",
              });
              break;
            case "auth/user-not-found":
              Swal.fire({
                title: "Opss, wrong-password",
                text: "Te gustaria hacer pan en desde tu casa?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#f5a637",
                cancelButtonColor: "#d33",
                confirmButtonText: "Registrate ahora 🙋",
                position: "center",
              }).then((result) => {
                if (result.isConfirmed) {
                  this.router.navigate(["/register"]);
                }
              });
              break;
            default:
              alert(errorMessage);
              break;
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
