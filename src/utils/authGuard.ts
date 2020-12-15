import {
  redirectUnauthorizedTo,
  redirectLoggedInTo,
} from "@angular/fire/auth-guard";

export class AuthGuard {
  static redirectUnauthorizedToLogin() {
    return redirectUnauthorizedTo(["auth/login"]);
  }
  static redirectLoggedInToItems() {
    return redirectLoggedInTo(["home"]);
  }
}
