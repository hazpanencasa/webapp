import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {LayoutComponent} from "./components/layout/layout.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        redirectTo: "/home",
        pathMatch: "full",
      },
      {
        path: "",
        loadChildren: () =>
          import("./components/main/main.module")
            .then((m) => m.MainModule)
            .catch((err) => console.log(err)),
      },
      {
        path: "formulas",
        loadChildren: () =>
          import("./components/formulas/formulas.module")
            .then((m) => m.FormulasModule)
            .catch((err) => console.log(err)),
      },
      {
        path: "ingredients",
        loadChildren: () =>
          import("./components/ingredients/ingredients.module").then(
            (m) => m.IngredientsModule
          ),
      },
      {
        path: "productions",
        loadChildren: () =>
          import("./components/productions/productions.module").then(
            (m) => m.ProductionsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
