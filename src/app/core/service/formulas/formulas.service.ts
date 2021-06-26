import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Formula, IngredientsFormula } from '../../model/formulas.model';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

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

  getFormulas(): any {
    console.log('formulas => subscribe');
    return this.db
      .collection<Formula>('formulas')
      .snapshotChanges()
      .pipe(map((data) => data));
  }

  getFormula(id: string): Observable<Formula> {
    return this.db.doc<Formula>(`formulas/${id}`).valueChanges();
  }
  getFormulaIngredients(path: string): Observable<IngredientsFormula[]> {
    return this.db
      .collection<IngredientsFormula>(`${path}/ingredients`)
      .valueChanges();
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
