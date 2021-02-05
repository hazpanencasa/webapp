import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../../../material/material.module";
import { SharedModule } from "@shared/shared.module";
import { IngredientsRoutingModule } from "./ingredients-routing.module";
import { IngredientsComponent } from "./components/ingredients/ingredients.component";
import { BannerComponent } from "./components/banner/banner.component";
import { IngredientsService } from "@core/service/ingredients/ingredients.service";
import { CdkTableModule } from "@angular/cdk/table";
import { IngredientDetailComponent } from "./components/ingredient-detail/ingredient-detail.component";
import { IngredientsGridComponent } from "./components/ingredients/components/ingredients-grid/ingredients-grid.component";

@NgModule({
  declarations: [
    BannerComponent,
    IngredientsComponent,
    IngredientDetailComponent,
    IngredientsGridComponent,
  ],
  imports: [
    CommonModule,
    IngredientsRoutingModule,
    MaterialModule,
    CdkTableModule,
    SharedModule,
    FormsModule,
  ],
  providers: [IngredientsService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class IngredientsModule {}
