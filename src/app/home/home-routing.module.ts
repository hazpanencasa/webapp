import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {BannerComponent} from "./components/banner/banner.component";
import {FormulasComponent} from "./components/formulas/formulas.component";
import {IngredientsComponent} from "./components/ingredients/ingredients.component";
import {ProductionsComponent} from "./components/productions/productions.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      {
        path: "formula",
        component: FormulasComponent,
      },
      {
        path: "ingredient",
        component: IngredientsComponent,
      },
      {
        path: "production",
        component: ProductionsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
