import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {AngularFireAuthGuard} from "@angular/fire/auth-guard";
import {AuthGuard} from "@utils/authGuard";

const routes: Routes = [
  {
    path: "",
    redirectTo: "auth/login",
    pathMatch: "full",
  },
  {
    path: "auth",
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: AuthGuard.redirectLoggedInToItems},
    loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "home",
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: AuthGuard.redirectUnauthorizedToLogin},
    loadChildren: () =>
      import("./home/home.module")
        .then((m) => m.HomeModule)
        .catch((err) => console.log(err)),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: "legacy"})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
