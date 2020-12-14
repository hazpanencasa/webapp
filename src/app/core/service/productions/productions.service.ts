import {Injectable} from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from "@angular/fire/firestore";
import {Production} from "@core/model/productions.model";
import {Observable} from "rxjs";
@Injectable({
  providedIn: "root",
})
export class ProductionsService {
  productionsColletion: AngularFirestoreCollection<Production>;
  productions: Observable<Production[]>;
  productionsDoc: AngularFirestoreDocument<Production>;

  constructor(public afs: AngularFirestore) {
    this.productionsColletion = afs.collection("productions");
    this.productions = this.productionsColletion.valueChanges();
  }
  getProductions() {
    return this.productions;
  }
}
