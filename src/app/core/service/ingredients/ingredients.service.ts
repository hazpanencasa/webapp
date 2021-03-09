import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Ingredient } from '@core/model/ingredients.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class IngredientsService {
  ingredientsCollection: AngularFirestoreCollection<Ingredient>;
  ingredients: Observable<Ingredient[]>;
  ingredientsDoc: AngularFirestoreDocument<Ingredient>;
  ingredient: Observable<Ingredient>;

  constructor(public afs: AngularFirestore) {
    this.ingredientsCollection = afs.collection('ingredients');
    this.ingredients = this.ingredientsCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((ingredients) => {
          const data = ingredients.payload.doc.data() as Ingredient;
          data.id = ingredients.payload.doc.id;
          return data;
        });
      })
    );
  }
  getIngredients() {
    return this.ingredients;
  }
  getIngredient(id: string) {
    this.ingredientsDoc = this.afs.collection('ingredients').doc(`${id}`);
    return (this.ingredient = this.ingredientsDoc.valueChanges());
  }
  getIngredientCompound(id: string) {
    return this.afs
      .collection('ingredients')
      .doc(`${id}`)
      .collection('ingredients')
      .valueChanges();
  }
}
