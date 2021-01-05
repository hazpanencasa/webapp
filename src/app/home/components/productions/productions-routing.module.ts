import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {ProductionDetailComponent} from "./components/production-detail/production-detail.component";

import {ProductionsComponent} from "./components/productions/productions.component";

const routes: Routes = [
  {
    path: "",
    component: ProductionsComponent,
  },
  {
    path: ":id",
    component: ProductionDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductionsRoutingModule {}
