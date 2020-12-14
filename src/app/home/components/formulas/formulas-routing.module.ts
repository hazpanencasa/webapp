import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {FormulasComponent} from "./components/formulas/formulas.component";

const routes: Routes = [
  {
    path: "",
    component: FormulasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormulasRoutingModule {}
