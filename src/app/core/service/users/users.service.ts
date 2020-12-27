import {Injectable} from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from "@angular/fire/firestore";
import {User} from "@core/model/users.model";
import {Observable} from "rxjs";
@Injectable({
  providedIn: "root",
})
export class UsersService {
  usersColletion: AngularFirestoreCollection<User>;
  users: Observable<User[]>;
  usersDoc: AngularFirestoreDocument<User>;
  constructor(af: AngularFirestore) {
    this.usersColletion = af.collection("users");
    this.users = this.usersColletion.valueChanges();
  }
  getUsers() {
    return this.users;
  }
}
