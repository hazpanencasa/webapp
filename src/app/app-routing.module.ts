import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {
  AngularFireAuthGuard,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
} from "@angular/fire/auth-guard";

const redirectUnauthorizedToLogin = () =>
  redirectUnauthorizedTo(["auth/login"]);
const redirectLoggedInToItems = () => redirectLoggedInTo(["home"]);

const routes: Routes = [
  {
    path: "",
    redirectTo: "auth/login",
    pathMatch: "full",
  },
  {
    path: "auth",
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectLoggedInToItems},
    loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "home",
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectUnauthorizedToLogin},
    loadChildren: () => import("./home/home.module").then((m) => m.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: "legacy"})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
