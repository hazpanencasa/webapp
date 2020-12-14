import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {CommonModule} from "@angular/common";

import {IngredientsRoutingModule} from "./ingredients-routing.module";
import {IngredientsComponent} from "./components/ingredients/ingredients.component";
import {BannerComponent} from "./components/banner/banner.component";
import {IngredientsService} from "@core/service/ingredients/ingredients.service";
@NgModule({
  declarations: [BannerComponent, IngredientsComponent],
  imports: [CommonModule, IngredientsRoutingModule],
  providers: [IngredientsService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class IngredientsModule {}
