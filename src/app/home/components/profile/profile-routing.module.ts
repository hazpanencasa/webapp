import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EditProfileComponent } from "./components/edit-profile/edit-profile.component";
import { ProfileComponent } from "./components/profile/profile.component";

const routes: Routes = [
  {
    path: "",
    component: ProfileComponent,
  },
  {
    path: ":id",
    component: EditProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
