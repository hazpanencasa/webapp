import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HomeRoutingModule} from "./home-routing.module";

import {SharedModule} from "@shared/shared.module";
import {LayoutComponent} from "./components/layout/layout.component";

import {BannerComponent} from "./components/home/components/banner/banner.component";
import {GalleryComponent} from "./components/home/components/gallery/gallery.component";

import {IngredientsComponent} from "./components/ingredients/ingredients.component";
import {HomeComponent} from "./components/home/home.component";
import {FormulasComponent} from "./components/formulas/formulas.component";
import {ProductionsComponent} from "./components/productions/productions.component";

import {TranslateModule} from "@ngx-translate/core";
import {MaterialModule} from "../material/material.module";
import {LayoutModule} from "@angular/cdk/layout";
import { InfoComponent } from './components/home/components/info/info.component';

@NgModule({
  declarations: [
    FormulasComponent,
    HomeComponent,
    IngredientsComponent,
    ProductionsComponent,
    BannerComponent,
    LayoutComponent,
    GalleryComponent,
    InfoComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    TranslateModule,
    LayoutModule,
    MaterialModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
