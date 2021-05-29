import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material/material.module';
import { SharedModule } from '@shared/shared.module';
import { IngredientsRoutingModule } from './ingredients-routing.module';
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { BannerComponent } from './components/banner/banner.component';
import { IngredientsService } from '@core/service/ingredients/ingredients.service';
import { CdkTableModule } from '@angular/cdk/table';
import { IngredientDetailComponent } from './components/ingredient-detail/ingredient-detail.component';
import { IngredientsGridComponent } from './components/ingredients/components/ingredients-grid/ingredients-grid.component';

import { TranslateModule } from '@ngx-translate/core';
import { TableIngredientsComponent } from './components/ingredient-detail/components/table-ingredients/table-ingredients.component';
import { TableMixingComponent } from './components/ingredient-detail/components/table-mixing/table-mixing.component';

@NgModule({
  declarations: [
    BannerComponent,
    IngredientsComponent,
    IngredientDetailComponent,
    IngredientsGridComponent,
    TableIngredientsComponent,
    TableMixingComponent,
  ],
  imports: [
    CommonModule,
    IngredientsRoutingModule,
    MaterialModule,
    CdkTableModule,
    SharedModule,
    FormsModule,
    TranslateModule,
  ],
  // providers: [IngredientsService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class IngredientsModule {}
