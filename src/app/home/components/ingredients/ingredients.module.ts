import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MaterialModule} from "../../../material/material.module";

import {IngredientsRoutingModule} from "./ingredients-routing.module";
import {IngredientsComponent} from "./components/ingredients/ingredients.component";
import {BannerComponent} from "./components/banner/banner.component";
import {IngredientsService} from "@core/service/ingredients/ingredients.service";
import {CdkTableModule} from "@angular/cdk/table";
import { IngredientDetailComponent } from './components/ingredient-detail/ingredient-detail.component';

@NgModule({
  declarations: [BannerComponent, IngredientsComponent, IngredientDetailComponent],
  imports: [
    CommonModule,
    IngredientsRoutingModule,
    MaterialModule,
    CdkTableModule,
  ],
  providers: [IngredientsService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class IngredientsModule {}
