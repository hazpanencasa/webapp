import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {
  AngularFireAuthGuard,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
} from "@angular/fire/auth-guard";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";

const redirectLoggedInToItems = () => redirectLoggedInTo(["home"]);
const routes: Routes = [
  {
    path: "",
    // component: LoginComponent,
    children: [
      {
        path: "",
        redirectTo: "/login",
        pathMatch: "full",
      },
      {
        path: "",
        component: LoginComponent,
        // canActivate: [AngularFireAuthGuard],
        // data: {authGuardPipe: redirectLoggedInToItems},
      },
      {
        path: "register",
        component: RegisterComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
