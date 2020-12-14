import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ProductionsService} from "@core/service/productions/productions.service";

import {ProductionsRoutingModule} from "./productions-routing.module";
import {BannerComponent} from "./components/banner/banner.component";
import {ProductionsComponent} from "./components/productions/productions.component";

@NgModule({
  providers: [ProductionsService],
  declarations: [BannerComponent, ProductionsComponent],
  imports: [CommonModule, ProductionsRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductionsModule {}
