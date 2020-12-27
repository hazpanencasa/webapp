import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
<<<<<<< HEAD
import {AngularFireAuthGuard} from "@angular/fire/auth-guard";
import {AuthGuard} from "@utils/authGuard";
=======
import {
  AngularFireAuthGuard,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
} from "@angular/fire/auth-guard";

const redirectUnauthorizedToLogin = () => {
  redirectUnauthorizedTo(["login"]);
};
const redirectLoggedInToItems = () => redirectLoggedInTo(["home"]);
>>>>>>> 38019b539e2f42a8cdd4ef8ddb92fe8fcb866989

const routes: Routes = [
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full",
  },
  {
<<<<<<< HEAD
    path: "auth",
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: AuthGuard.redirectLoggedInToItems},
=======
    path: "login",
    // canActivate: [AngularFireAuthGuard],
    // data: {authGuardPipe: redirectLoggedInToItems},
>>>>>>> 38019b539e2f42a8cdd4ef8ddb92fe8fcb866989
    loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "home",
    canActivate: [AngularFireAuthGuard],
<<<<<<< HEAD
    data: {authGuardPipe: AuthGuard.redirectUnauthorizedToLogin},
    loadChildren: () =>
      import("./home/home.module")
        .then((m) => m.HomeModule)
        .catch((err) => console.log(err)),
=======
    // data: {authGuardPipe: redirectUnauthorizedToLogin},
    loadChildren: () => import("./home/home.module").then((m) => m.HomeModule),
>>>>>>> 38019b539e2f42a8cdd4ef8ddb92fe8fcb866989
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: "legacy"})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
