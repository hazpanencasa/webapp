import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { CommonModule } from "@angular/common";
import { FormulasRoutingModule } from "./formulas-routing.module";

import { FormulasService } from "@core/service/formulas/formulas.service";
import { FormsModule } from "@angular/forms";
import { BannerComponent } from "./components/banner/banner.component";
import { FormulasComponent } from "./components/formulas/formulas.component";
import { FormulaDetailComponent } from "./components/formula-detail/formula.component";
import { TableTimeComponent } from "./components/formula-detail/components/table-time/table-time.component";
import { TableIngredientComponent } from "./components/formula-detail/components/table-ingredient/table-ingredient.component";
import { SharedModule } from "@shared/shared.module";
import { TableCompoundIngredientComponent } from "./components/formula-detail/components/table-compound-ingredient/table-compound-ingredient.component";
import { FormulaStepperComponent } from "./components/formula-detail/components/formula-stepper/formula-stepper.component";
import { TableIntroComponent } from "./components/formula-detail/components/table-intro/table-intro.component";
import { PreparationStepsComponent } from "./components/formula-detail/components/preparation-steps/preparation-steps.component";
import { CardComponent } from "./components/formulas/components/card/card.component";
import { AdditionalInfoComponent } from "./components/formula-detail/components/additional-info/additional-info.component";
import { NgxPrintModule } from "ngx-print";
import { TableCompoundIngredient2Component } from './components/formula-detail/components/table-compound-ingredient2/table-compound-ingredient2.component';
import { MixingIngredientCompoundComponent } from './components/formula-detail/components/table-compound-ingredient2/components/mixing-ingredient-compound/mixing-ingredient-compound.component';
@NgModule({
  declarations: [
    BannerComponent,
    FormulasComponent,
    FormulaDetailComponent,
    TableTimeComponent,
    TableIngredientComponent,
    TableCompoundIngredientComponent,
    FormulaStepperComponent,
    TableIntroComponent,
    PreparationStepsComponent,
    CardComponent,
    AdditionalInfoComponent,
    TableCompoundIngredient2Component,
    MixingIngredientCompoundComponent,
  ],
  imports: [
    CommonModule,
    FormulasRoutingModule,
    FormsModule,
    SharedModule,
    NgxPrintModule,
  ],
  providers: [FormulasService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FormulasModule {}
