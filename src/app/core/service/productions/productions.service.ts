import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { FormulaProduction } from '@core/model/formula-production';
import { IngredientProduction } from '@core/model/ingredient-production';
import { Production } from '@core/model/productions.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductionsService {
  productionsCollection: AngularFirestoreCollection<Production>;
  productions: Observable<Production[]>;
  productionsDoc: AngularFirestoreDocument<Production>;
  production: Observable<Production>;

  constructor(public afs: AngularFirestore) {
    this.productionsCollection = afs.collection<Production>('productions');
    this.productions = this.productionsCollection.valueChanges();
  }
  getProductions() {
    return this.productions;
  }
  getProduction(id: string) {
    const docRef = this.afs.doc(`productions/${id}`);
    return docRef.valueChanges();
  }
  getFormulaProductions(id: string) {
    const docRef = this.afs
      .doc(`productions/${id}`)
      .collection<FormulaProduction>('formulas');
    return docRef.valueChanges();
  }
  getProductionFormulaIngredients(id1: string, id2: string) {
    const docRef = this.afs
      .doc(`productions/${id1}`)
      .collection('formulas')
      .doc(`${id2}`)
      .collection<IngredientProduction>('ingredients');
    return docRef.valueChanges();
  }
}
