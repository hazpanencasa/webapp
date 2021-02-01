import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from "@core/model/users.model";
import { first } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private af: AngularFireAuth) {}

  async createUser(email: string, password: string, names: string) {
    const result = await this.af.createUserWithEmailAndPassword(
      email,
      password
    );
    result.user.updateProfile({
      displayName: names,
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
  saveUserProfile(user: User) {
    this.updateFullName(user.displayName);
    this.updateEmail(user.email);
  }
  updateFullName(fullName: string) {
    this.af.currentUser.then((userResult) => {
      userResult
        .updateProfile({
          displayName: fullName,
        })
        .then(() => console.log("fullName update!"))
        .catch((err) => console.log("error", err));
    });
  }
  updatePassword(email: string) {
    return this.af.sendPasswordResetEmail(email);
  }
  updateEmail(email: string) {
    this.af.currentUser.then((userResult) =>
      userResult
        .updateEmail(email)
        .then(() => console.log("email update!"))
        .catch((err) => console.log(err))
    );
  }
}
