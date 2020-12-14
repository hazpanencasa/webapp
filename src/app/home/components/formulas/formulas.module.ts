import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormulasService} from "@core/service/formulas/formulas.service";
import {FormulasRoutingModule} from "./formulas-routing.module";
import {BannerComponent} from "./components/banner/banner.component";
import {FormulasComponent} from "./components/formulas/formulas.component";

@NgModule({
  providers: [FormulasService],
  declarations: [BannerComponent, FormulasComponent],
  imports: [CommonModule, FormulasRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FormulasModule {}
