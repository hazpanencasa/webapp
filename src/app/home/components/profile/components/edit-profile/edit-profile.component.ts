import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "@core/service/auth/auth.service";

@Component({
  selector: "app-edit-profile",
  templateUrl: "./edit-profile.component.html",
  styleUrls: ["./edit-profile.component.sass"],
})
export class EditProfileComponent implements OnInit {
  updateUser: FormGroup;
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private route: Router
  ) {
    this.buildForm();
  }

  ngOnInit() {
    this.authService.getCurrentUser().then((user) => {
      const firstName = user.displayName.split(" ")[0];
      const lastName = user.displayName.split(" ")[1];
      console.log(firstName);
      console.log(lastName);
      this.updateUser.patchValue({
        firstName,
        lastName,
        email: user.email,
      });
    });
  }

  private buildForm() {
    this.updateUser = this.formBuilder.group({
      email: [
        "",
        [
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"),
        ],
      ],
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
    });
  }
  onSaveUser(event: Event) {
    event.preventDefault();
    if (this.updateUser.valid) {
      const fullName = `${this.updateUser.value.firstName} ${this.updateUser.value.lastName}`;
      const newUser = {
        displayName: fullName,
        email: this.updateUser.value.email,
      };
      this.authService.saveUserProfile(newUser);
      this.route.navigate(["/home/profile"]);
    }
  }

  get updateFormEmail() {
    return this.updateUser.get("email");
  }
  get updateFormPassword() {
    return this.updateUser.get("password");
  }
  get updateFormLastName() {
    return this.updateUser.get("lastName");
  }
  get updateFormFirstName() {
    return this.updateUser.get("firstName");
  }
}
