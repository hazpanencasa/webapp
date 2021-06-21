import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutModule } from '@angular/cdk/layout';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FilterPipe } from './pipes/filter.pipe';
import { PaginatePipe } from './pipes/paginate.pipe';
import { GravatarModule, GravatarConfig, FALLBACK, RATING } from 'ngx-gravatar';
import { PanelButtonsComponent } from './components/layout/panel-buttons/panel-buttons.component';
import { TranslateModule } from '@ngx-translate/core';
import { HydrationPipe } from './pipes/hydration.pipe';
import { GetGramsPipe } from './pipes/get-grams.pipe';
import { SortIngredientsPipe } from './pipes/sort-ingredients.pipe';
import { TotalWeightPipe } from './pipes/total-weight.pipe';
import { HeroComponent } from './components/layout/hero/hero.component';
import { TableIntroComponent } from './components/table-intro/table-intro.component';
import { TransformMinutesToHoursPipe } from './pipes/transform-minutes-to-hours.pipe';
import { SumAllTimePipe } from './pipes/sum-all-time.pipe';
import { BakeryFactorPipe } from './pipes/bakery-factor.pipe';

const gravatarConfig: GravatarConfig = {
  fallback: FALLBACK.robohash,
  rating: RATING.x,
  backgroundColor: '#881918',
};

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    FilterPipe,
    PaginatePipe,
    HydrationPipe,
    GetGramsPipe,
    SortIngredientsPipe,
    TotalWeightPipe,
    PanelButtonsComponent,
    HeroComponent,
    TableIntroComponent,
    TransformMinutesToHoursPipe,
    SumAllTimePipe,
    BakeryFactorPipe,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    LayoutModule,
    GravatarModule.forRoot(gravatarConfig),
    TranslateModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    FilterPipe,
    MaterialModule,
    PaginatePipe,
    GravatarModule,
    HydrationPipe,
    GetGramsPipe,
    SortIngredientsPipe,
    TotalWeightPipe,
    PanelButtonsComponent,
    HeroComponent,
    TableIntroComponent,
    SumAllTimePipe,
    BakeryFactorPipe,
  ],
})
export class SharedModule {}
