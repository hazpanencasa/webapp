import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {IngredientsComponent} from "./components/ingredients/ingredients.component";
import {HomeComponent} from "./components/home/home.component";
import {FormulasComponent} from "./components/formulas/formulas.component";
import {ProductionsComponent} from "./components/productions/productions.component";
import {HomeRoutingModule} from "./home-routing.module";

import {SharedModule} from "../shared/shared.module";
import {MaterialModule} from "../material/material.module";
import {NavComponent} from "./components/nav/nav.component";
import {LayoutModule} from "@angular/cdk/layout";
import { BannerComponent } from './components/banner/banner.component';

@NgModule({
  declarations: [
    FormulasComponent,
    HomeComponent,
    IngredientsComponent,
    ProductionsComponent,
    NavComponent,
    BannerComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MaterialModule,
    LayoutModule,
  ],
})
export class HomeModule {}
