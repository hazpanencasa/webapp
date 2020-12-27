import {Injectable} from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from "@angular/fire/firestore";
import {Formula} from "../../model/formulas.model";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
@Injectable({
  providedIn: "root",
})
export class FormulasService {
  formulas: Observable<Formula[]>;
  formulasColletion: AngularFirestoreCollection<Formula>;
  formulaDoc: AngularFirestoreDocument<Formula>;
  formula: Observable<Formula>;

  constructor(public afs: AngularFirestore) {
    this.formulasColletion = afs.collection("formulas");
    this.formulas = this.formulasColletion.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((formula) => {
          const data = formula.payload.doc.data() as Formula;
          data.id = formula.payload.doc.id;
          return data;
        });
      })
    );
  }
  getFormulas() {
    return this.formulas;
  }
  getFormula(id: string) {
    this.formulaDoc = this.afs.collection("formulas").doc(`${id}`);
    return (this.formula = this.formulaDoc.valueChanges());
  }
}
