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
          Swal.fire({
            title: "Gracias por registrate",
            width: 600,
            padding: "3em",
            imageUrl: "https://i.gifer.com/uI7.gif",
            imageWidth: 400,
            imageHeight: 200,
            icon: "success",
            background: "#fff",
            backdrop: `
          rgb(214, 96, 96, .4)
          `,
            confirmButtonText: "Haz Login Ahora",
          }).then(() => {
            this.router.navigate(["/auth/login"]);
          });
        })
        .catch((error) => {
          if (this.registerForm.invalid) {
            Swal.fire({
              icon: "error",
              title: `${error}`,
              text: "Something went wrong!",
              confirmButtonText: "Intenta otra vez",
              confirmButtonColor: "#3085d6",
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
