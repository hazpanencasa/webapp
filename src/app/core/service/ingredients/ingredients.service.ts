import {Injectable} from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from "@angular/fire/firestore";
import {Ingredient} from "@core/model/ingredients.model";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
@Injectable({
  providedIn: "root",
})
export class IngredientsService {
  ingredientsColletion: AngularFirestoreCollection<Ingredient>;
  ingredients: Observable<Ingredient[]>;
  ingredientsDoc: AngularFirestoreDocument<Ingredient>;
  ingredient: Observable<Ingredient>;

  constructor(public afs: AngularFirestore) {
    this.ingredientsColletion = afs.collection("ingredients");
    this.ingredients = this.ingredientsColletion.snapshotChanges().pipe(
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
  getFormula(id: string) {
    this.ingredientsDoc = this.afs.collection("ingredients").doc(`${id}`);
    return (this.ingredient = this.ingredientsDoc.valueChanges());
  }
}
