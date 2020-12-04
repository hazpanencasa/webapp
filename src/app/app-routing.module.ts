import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {FormulasComponent} from "./home/components/formulas/formulas.component";
import {IngredientsComponent} from "./home/components/ingredients/ingredients.component";
import {ProductionsComponent} from "./home/components/productions/productions.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "auth/login",
    pathMatch: "full",
  },
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
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
