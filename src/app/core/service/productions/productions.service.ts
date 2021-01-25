import {Injectable} from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from "@angular/fire/firestore";
import {Production} from "@core/model/productions.model";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ProductionsService {
  productionsColletion: AngularFirestoreCollection<Production>;
  productions: Observable<Production[]>;
  productionsDoc: AngularFirestoreDocument<Production>;
  production: Observable<Production>;

  constructor(public afs: AngularFirestore) {
    this.productionsColletion = afs.collection("productions");
    this.productions = this.productionsColletion.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((ingredients) => {
          const data = ingredients.payload.doc.data() as Production;
          data.id = ingredients.payload.doc.id;
          return data;
        });
      })
    );
  }
  getProductions() {
    return this.productions;
  }
  getProduction(id: string) {
    this.productionsDoc = this.afs.collection("productions").doc(`${id}`);
    return (this.production = this.productionsDoc.valueChanges());
  }
}
