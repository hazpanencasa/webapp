import { Injectable, EventEmitter } from '@angular/core';
import {
  AngularFirestore,
  DocumentChangeAction,
} from '@angular/fire/firestore';
import { Formula, IngredientsFormula } from '../../model/formulas.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FormulasService {
  constructor(public db: AngularFirestore) {}
  hydrationStatus = new EventEmitter<string>();

  getFormulas(): Observable<Formula[]> {
    return this.db
      .collection<Formula>('formulas')
      .snapshotChanges()
      .pipe(
        map((actions: DocumentChangeAction<Formula>[]) =>
          actions.map((formulas: DocumentChangeAction<Formula>) => {
            const Ingredients: IngredientsFormula[] = [];
            const data = formulas.payload.doc.data() as Formula;
            const path = formulas.payload.doc.ref.path;
            this.db
              .collection<IngredientsFormula>(path + '/ingredients')
              .snapshotChanges()
              .pipe(
                map((actions: DocumentChangeAction<IngredientsFormula>[]) =>
                  actions.map(
                    (ingredients: DocumentChangeAction<IngredientsFormula>) =>
                      Ingredients.push(ingredients.payload.doc.data())
                  )
                )
              )
              .subscribe();
            return { Ingredients, ...data };
          })
        )
      );
  }
  getFormula(id: string): Observable<Formula> {
    return this.db.doc<Formula>(`formulas/${id}`).valueChanges();
  }
  getFormulaIngredients(path: string) {
    return this.db.collection(path + '/ingredients').valueChanges();
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
  getIngredientCompoundSubCollection(
    idFormula: string,
    idIngredient: string,
    idIngredientCompound: string
  ) {
    return this.db
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
