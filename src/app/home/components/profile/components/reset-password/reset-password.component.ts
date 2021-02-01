import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "@core/service/auth/auth.service";
import { modalResetPassword } from "@utils/modal";

@Component({
  selector: "app-reset-password",
  templateUrl: "./reset-password.component.html",
  styleUrls: ["./reset-password.component.sass"],
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm: FormGroup;
  hide = false;

  public user: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.buildForm();
  }

  ngOnInit() {}

  handleClick(event: Event) {
    event.preventDefault();
    this.hide = !this.hide;
  }

  resetPassword(event: Event) {
    event.preventDefault();
    if (this.resetPasswordForm.valid) {
      const email = this.resetPasswordForm.value.email;
      this.authService.updatePassword(email).then(() => {
        modalResetPassword().then((result) => {
          if (result.isConfirmed) {
            this.authService.logOut();
            this.router.navigate(["login"]);
          }
        });
      });
    }
  }

  private buildForm() {
    this.resetPasswordForm = this.formBuilder.group({
      email: [
        "",
        [
          Validators.required,
          Validators.email,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"),
        ],
      ],
    });
  }
  get loginFormEmail() {
    return this.resetPasswordForm.get("email");
  }
}
