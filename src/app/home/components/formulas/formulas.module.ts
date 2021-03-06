import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormulasRoutingModule } from './formulas-routing.module';
import { FormsModule } from '@angular/forms';
import { BannerComponent } from './components/banner/banner.component';
import { FormulasComponent } from './components/formulas/formulas.component';
import { FormulaDetailComponent } from './components/formula-detail/formula.component';
import { TableTimeComponent } from './components/formula-detail/components/table-time/table-time.component';
import { TableIngredientComponent } from './components/formula-detail/components/table-ingredient/table-ingredient.component';
import { SharedModule } from '@shared/shared.module';
import { TableCompoundIngredientComponent } from './components/formula-detail/components/table-compound-ingredient/table-compound-ingredient.component';
import { FormulaStepperComponent } from './components/formula-detail/components/formula-stepper/formula-stepper.component';
import { PreparationStepsComponent } from './components/formula-detail/components/preparation-steps/preparation-steps.component';
import { CardComponent } from './components/formulas/components/card/card.component';
import { AdditionalInfoComponent } from './components/formula-detail/components/additional-info/additional-info.component';

import { MixingIngredientCompoundComponent } from './components/formula-detail/components/table-compound-ingredient/components/mixing-ingredient-compound/mixing-ingredient-compound.component';

import { TranslateModule } from '@ngx-translate/core';
import { TableIngredientCompoundDetailComponent } from './components/formula-detail/components/table-compound-ingredient/components/table-ingredient-compound-detail/table-ingredient-compound-detail.component';
import { TableIngredientsCompoundSecondLayerComponent } from './components/formula-detail/components/table-compound-ingredient/components/table-ingredients-compound-second-layer/table-ingredients-compound-second-layer.component';
import { FormulaCompoundStepperComponent } from './components/formula-detail/components/formula-compound-stepper/formula-compound-stepper.component';
import { TableIngredientCompoundThirdLayerComponent } from './components/formula-detail/components/table-compound-ingredient/components/table-ingredient-compound-third-layer/table-ingredient-compound-third-layer.component';
import { FormulaCompoundStepperSecondLayerComponent } from './components/formula-detail/components/formula-compound-stepper/components/formula-compound-stepper-second-layer/formula-compound-stepper-second-layer.component';
import { FormulasService } from '@core/service/formulas/formulas.service';

@NgModule({
  declarations: [
    BannerComponent,
    FormulasComponent,
    FormulaDetailComponent,
    TableTimeComponent,
    TableIngredientComponent,
    TableCompoundIngredientComponent,
    FormulaStepperComponent,
    PreparationStepsComponent,
    CardComponent,
    AdditionalInfoComponent,
    MixingIngredientCompoundComponent,
    TableIngredientCompoundDetailComponent,
    TableIngredientsCompoundSecondLayerComponent,
    FormulaCompoundStepperComponent,
    TableIngredientCompoundThirdLayerComponent,
    FormulaCompoundStepperSecondLayerComponent,
  ],
  imports: [
    CommonModule,
    FormulasRoutingModule,
    FormsModule,
    SharedModule,
    TranslateModule,
  ],
  providers: [FormulasService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FormulasModule {}
