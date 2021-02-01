import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EditProfileComponent } from "./components/edit-profile/edit-profile.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { ResetPasswordComponent } from "./components/reset-password/reset-password.component";

const routes: Routes = [
  {
    path: "",
    component: ProfileComponent,
  },
  {
    path: "edit-profile",
    component: EditProfileComponent,
  },
  {
    path: "reset-password",
    component: ResetPasswordComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
