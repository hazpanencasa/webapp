import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Formula } from '../../model/formulas.model';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormulasService {
  formulasCollection: AngularFirestoreCollection<Formula>;
  formulaDoc: AngularFirestoreDocument<Formula>;
  formulas: Observable<Formula[]>;
  formula: Observable<Formula>;
  ingredients: Subscription;
  constructor(private db: AngularFirestore) {}

  getFormulas(): Observable<Formula[]> {
    return this.db.collection<Formula>('formulas').valueChanges();
  }

  getFormula(id: string): Observable<Formula> {
    return this.db.doc<Formula>(`formulas/${id}`).valueChanges();
  }
  getFormulaIngredients(id: string) {
    return this.db.collection(`formulas/${id}/ingredients`).valueChanges();
  }
  getFormulaIngredientsCompound(
    idFormula: string,
    idIngredient: string
  ): Observable<any[]> {
    return this.db
      .collection(
        `formulas/${idFormula}/ingredients/${idIngredient}/ingredients`
      )
      .valueChanges();
  }
  // getIngredientCompoundSubCollection(
  //   idFormula: string,
  //   idIngredient: string,
  //   idIngredientCompound: string
  // ) {
  //   return this.db
  //     .collection('formulas')
  //     .doc(`${idFormula}`)
  //     .collection('ingredients')
  //     .doc(`${idIngredient}`)
  //     .collection('ingredients')
  //     .doc(`${idIngredientCompound}`)
  //     .collection('ingredients')
  //     .valueChanges();
  // }
}
