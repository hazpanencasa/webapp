import {Injectable} from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from "@angular/fire/firestore";
import {Ingredient} from "@core/model/ingredients.model";
import {Observable} from "rxjs";
@Injectable({
  providedIn: "root",
})
export class IngredientsService {
  ingredientsColletion: AngularFirestoreCollection<Ingredient>;
  ingredients: Observable<Ingredient[]>;
  ingredientsDoc: AngularFirestoreDocument<Ingredient>;

  constructor(public afs: AngularFirestore) {
    this.ingredientsColletion = afs.collection("ingredients");
    this.ingredients = this.ingredientsColletion.valueChanges();
  }
  getIngredients() {
    return this.ingredients;
  }
}
