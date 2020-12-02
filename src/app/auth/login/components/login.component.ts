import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../core/service/auth/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.sass"],
})
export class LoginComponent implements OnInit {
  constructor(
    // private formBuilder: FormBuilder,
    // private router: Router,
    private authService: AuthService
    ) {
    }
    hide = true;

  ngOnInit(): void {}

  // login(event: Event) {
  //   event.preventDefault();
  //   if (this.form.valid) {
  //     const value = this.form.value;
  //     this.authService
  //       .login(value.email, value.password)
  //       .then(() => {
  //         this.router.navigate(["/ingredients"]);
  //       })
  //       .catch(() => {
  //         alert("no es valido");
  //       });
  //   }
  // }
}
