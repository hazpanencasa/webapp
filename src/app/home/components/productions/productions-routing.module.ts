import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {ProductionsComponent} from "./components/productions/productions.component";

const routes: Routes = [
  {
    path: "",
    component: ProductionsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductionsRoutingModule {}
