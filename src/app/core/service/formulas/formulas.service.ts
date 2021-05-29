import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Formula } from '../../model/formulas.model';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FormulasService {
  formulasCollection: AngularFirestoreCollection<Formula>;
  formulaDoc: AngularFirestoreDocument<Formula>;
  formulas: Observable<Formula[]>;
  formula: Observable<Formula>;
  constructor(public db: AngularFirestore) {}

  getFormulas(): Observable<Formula[]> {
    this.formulasCollection = this.db.collection<Formula>('formulas');
    this.formulas = this.formulasCollection.valueChanges().pipe(
      map((dataSource$) => dataSource$),
      catchError((error) => throwError('Oh oh Something went Wrong 😵', error))
    );
    return this.formulas;
  }

  // getFormula(id: string): Observable<Formula> {
  //   return this.db.doc<Formula>(`formulas/${id}`).valueChanges();
  // }
  // getFormulaIngredients(id: string) {
  //   return this.db.collection(`formulas/${id}/ingredients`).valueChanges();
  // }
  // getFormulaIngredientsCompound(
  //   idFormula: string,
  //   idIngredient: string
  // ): Observable<any[]> {
  //   return this.db
  //     .collection(
  //       `formulas/${idFormula}/ingredients/${idIngredient}/ingredients`
  //     )
  //     .valueChanges();
  // }
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
