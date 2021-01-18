import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

import {CommonModule} from "@angular/common";
import {FormulasRoutingModule} from "./formulas-routing.module";

import {FormulasService} from "@core/service/formulas/formulas.service";
import {FormsModule} from "@angular/forms";
import {BannerComponent} from "./components/banner/banner.component";
import {FormulasComponent} from "./components/formulas/formulas.component";
import {FormulaDetailComponent} from "./components/formula-detail/formula.component";
import {Table1Component} from "./components/formula-detail/components/table1-values/table1.component";
import {Table2Component} from "./components/formula-detail/components/table2-ingredient/table2.component";
import {SharedModule} from "@shared/shared.module";
import {Table3Component} from "./components/formula-detail/components/table3-ingredient_complex/table3.component";
import { FormulaStepperComponent } from './components/formula-detail/components/formula-stepper/formula-stepper.component';
import { FormulaTableTimeComponent } from './components/formula-detail/components/formula-table-time/formula-table-time.component';

@NgModule({
  declarations: [
    BannerComponent,
    FormulasComponent,
    FormulaDetailComponent,
    Table1Component,
    Table2Component,
    Table3Component,
    FormulaStepperComponent,
    FormulaTableTimeComponent,
  ],
  imports: [CommonModule, FormulasRoutingModule, FormsModule, SharedModule],
  providers: [FormulasService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FormulasModule {}
