import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Formula, IngredientsFormula } from '../../model/formulas.model';
import { Observable, of, Subscription, throwError } from 'rxjs';
import { catchError, map, retry, share } from 'rxjs/operators';

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
      .pipe(
        catchError((err) => {
          console.log('Handling error locally and rethrowing it...', err);
          return throwError(err);
        }),
        retry(1),
        share()
      );
  }

  getFormula(id: string): Observable<Formula> {
    return this.db.doc<Formula>(`formulas/${id}`).valueChanges();
    //  this.userDoc.collection<Task>('tasks').valueChanges();
    // return this.db
    //   .doc<Formula>()
    //   .valueChanges()
    //   .pipe(
    //     catchError((err) => {
    //       console.log('Handling error locally and rethrowing it...', err);
    //       return throwError(err);
    //     }),
    //     retry(1),
    //     share()
    //   );
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
