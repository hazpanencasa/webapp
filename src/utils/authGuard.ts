import {
  redirectUnauthorizedTo,
  redirectLoggedInTo,
} from "@angular/fire/auth-guard";
<<<<<<< HEAD

export class AuthGuard {
  static redirectUnauthorizedToLogin() {
    return redirectUnauthorizedTo(["auth/login"]);
  }
  static redirectLoggedInToItems() {
    return redirectLoggedInTo(["home"]);
=======
export class AuthGuard {
  static noAuth() {
    redirectUnauthorizedTo(["auth/login"]);
  }
  static redirectLogged() {
    redirectLoggedInTo(["home"]);
>>>>>>> 38019b539e2f42a8cdd4ef8ddb92fe8fcb866989
  }
}
