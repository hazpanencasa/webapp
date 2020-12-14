import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HomeRoutingModule} from "./home-routing.module";

import {SharedModule} from "@shared/shared.module";
import {LayoutComponent} from "./components/layout/layout.component";

import {TranslateModule} from "@ngx-translate/core";
import {MaterialModule} from "../material/material.module";
import {LayoutModule} from "@angular/cdk/layout";

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    TranslateModule,
    LayoutModule,
    MaterialModule,
  ],
})
export class HomeModule {}
