import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Formula, IngredientsSecondRequest } from '../../model/formulas.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FormulasService {
  formulas: Observable<Formula[]>;
  formulasCollection: AngularFirestoreCollection<Formula>;
  formulaDoc: AngularFirestoreDocument<Formula>;
  formula: Observable<Formula>;
  ingredientsSecondRequest: AngularFirestoreCollection<IngredientsSecondRequest>;

  constructor(public afs: AngularFirestore) {
    this.formulasCollection = afs.collection('formulas');
    this.formulas = this.formulasCollection.snapshotChanges().pipe(
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
    this.formulaDoc = this.afs.collection('formulas').doc(`${id}`);
    return (this.formula = this.formulaDoc.valueChanges());
  }
  getFormulaIngredients(idFormula: string) {
    return this.afs
      .collection(`formulas/${idFormula}/ingredients`)
      .valueChanges();
  }
  getFormulaIngredientsCompound(
    idFormula: string,
    idIngredient: string
  ): Observable<any[]> {
    return this.afs
      .collection(
        `formulas/${idFormula}/ingredients/${idIngredient}/ingredients`
      )
      .valueChanges();
  }
  getIngredientCompoundSubCollection(
    idFormula: string,
    idIngredient: string,
    idIngredientCompound: string
  ) {
    return this.afs
      .collection('formulas')
      .doc(`${idFormula}`)
      .collection('ingredients')
      .doc(`${idIngredient}`)
      .collection('ingredients')
      .doc(`${idIngredientCompound}`)
      .collection('ingredients')
      .valueChanges();
  }
}
