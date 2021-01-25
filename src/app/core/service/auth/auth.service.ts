import {Injectable} from "@angular/core";
import {AngularFireAuth} from "@angular/fire/auth";
import {first} from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private af: AngularFireAuth) {}

  createUser(email: string, password: string, names: string) {
    return this.af
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user.updateProfile({
          displayName: names,
        });
      });
  }
  logIn(email: string, password: string) {
    return this.af.signInWithEmailAndPassword(email, password);
  }
  logOut() {
    return this.af.signOut();
  }
  getCurrentUser() {
    return this.af.authState.pipe(first()).toPromise();
  }
}
