import {
  redirectUnauthorizedTo,
  redirectLoggedInTo,
} from "@angular/fire/auth-guard";
export class AuthGuard {
  static noAuth() {
    redirectUnauthorizedTo(["auth/login"]);
  }
  static redirectLogged() {
    redirectLoggedInTo(["home"]);
  }
}
