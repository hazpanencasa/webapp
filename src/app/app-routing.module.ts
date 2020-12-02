import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {FormulasComponent} from "./formulas/formulas.component";
import {IngredientsComponent} from "./ingredients/ingredients.component";
import {ProductionsComponent} from "./productions/productions.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "login",
    loadChildren: () =>
      import("./auth/login/login.module").then((m) => m.LoginModule),
  },
  {
    path: "ingredients",
    component: IngredientsComponent,
  },
  {
    path: "productions",
    component: ProductionsComponent,
  },
  {
    path: "formulas",
    component: FormulasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: "legacy"})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
