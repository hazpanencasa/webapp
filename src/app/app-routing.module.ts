<<<<<<< HEAD
import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
<<<<<<< HEAD
import {AngularFireAuthGuard} from "@angular/fire/auth-guard";
import {AuthGuard} from "@utils/authGuard";
=======
=======
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
>>>>>>> prod
import {
  AngularFireAuthGuard,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
} from "@angular/fire/auth-guard";

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(["login"]);
const redirectLoggedInToItems = () => redirectLoggedInTo(["home"]);
<<<<<<< HEAD
>>>>>>> 38019b539e2f42a8cdd4ef8ddb92fe8fcb866989
=======
>>>>>>> prod

const routes: Routes = [
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full",
  },
  {
<<<<<<< HEAD
<<<<<<< HEAD
    path: "auth",
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: AuthGuard.redirectLoggedInToItems},
=======
    path: "login",
    // canActivate: [AngularFireAuthGuard],
    // data: {authGuardPipe: redirectLoggedInToItems},
>>>>>>> 38019b539e2f42a8cdd4ef8ddb92fe8fcb866989
=======
    path: "login",
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToItems },
>>>>>>> prod
    loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
  },
  // {
  //   path: "home",
  //   canActivate: [AngularFireAuthGuard],
  //   data: { authGuardPipe: redirectUnauthorizedToLogin },
  //   loadChildren: () => import("./home/home.module").then((m) => m.HomeModule),
  // },
  {
    path: "home",
    canActivate: [AngularFireAuthGuard],
<<<<<<< HEAD
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
=======
    data: { authGuardPipe: redirectUnauthorizedToLogin },
    loadChildren: () =>
      import("./sub-home/sub-home.module").then((m) => m.SubHomeModule),
>>>>>>> prod
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
