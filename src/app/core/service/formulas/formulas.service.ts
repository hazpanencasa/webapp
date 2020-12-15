import {Injectable} from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from "@angular/fire/firestore";
import {Formula} from "../../model/formulas.model";
import {Observable} from "rxjs";
@Injectable({
  providedIn: "root",
})
export class FormulasService {
  formulasColletion: AngularFirestoreCollection<Formula>;
  formulas: Observable<Formula[]>;
  formulasDoc: AngularFirestoreDocument<Formula>;
  formula: Observable<Formula>;
  constructor(public afs: AngularFirestore) {
    this.formulasColletion = afs.collection("formulas");
    this.formulas = this.formulasColletion.valueChanges();
    this.formulasDoc = afs.doc<Formula>("fomula/id");
    this.formula = this.formulasDoc.valueChanges();
  }

  getFormulas() {
    return this.formulas;
  }
  getFormula() {
    return this.formula;
  }
}
