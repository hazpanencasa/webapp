import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductionsService } from "@core/service/productions/productions.service";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "@shared/shared.module";
import { ProductionsRoutingModule } from "./productions-routing.module";
import { BannerComponent } from "./components/banner/banner.component";
import { ProductionsComponent } from "./components/productions/productions.component";
import { ProductionDetailComponent } from "./components/production-detail/production-detail.component";
import { TableIngredientsComponent } from './components/production-detail/compoenents/table-ingredients/table-ingredients.component';
import { TableIntroComponent } from './components/production-detail/compoenents/table-intro/table-intro.component';
import { ProductionStepperComponent } from './components/production-detail/compoenents/production-stepper/production-stepper.component';
import { TableIngredientsCompoundIngredientComponent } from './components/production-detail/compoenents/table-ingredients-compound-ingredient/table-ingredients-compound-ingredient.component';

@NgModule({
  providers: [ProductionsService],
  declarations: [
    BannerComponent,
    ProductionsComponent,
    ProductionDetailComponent,
    TableIngredientsComponent,
    TableIntroComponent,
    ProductionStepperComponent,
    TableIngredientsCompoundIngredientComponent,
  ],
  imports: [CommonModule, ProductionsRoutingModule, FormsModule, SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductionsModule {}
