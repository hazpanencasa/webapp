import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {IngredientDetailComponent} from "./components/ingredient-detail/ingredient-detail.component";

import {IngredientsComponent} from "./components/ingredients/ingredients.component";

const routes: Routes = [
  {
    path: "",
    component: IngredientsComponent,
  },
  {
    path: ":id",
    component: IngredientDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngredientsRoutingModule {}
