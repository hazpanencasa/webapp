import {Injectable} from "@angular/core";
import {AngularFireAuth} from "@angular/fire/auth";
import {first} from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private af: AngularFireAuth) {}

  async createUser(email: string, password: string) {
    try {
      const result = await this.af.createUserWithEmailAndPassword(
        email,
        password
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  }
  async login(email: string, password: string) {
    try {
      const result = await this.af.signInWithEmailAndPassword(email, password);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
  async logout() {
    try {
      await this.af.signOut();
    } catch (error) {
      console.log(error);
    }
  }
  async getCurrentUser() {
    try {
      this.af.authState.pipe(first()).toPromise();
    } catch (error) {
      console.log(error);
    }
  }
}
