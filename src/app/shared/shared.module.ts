import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import {AuthService} from "@core/service/auth/auth.service";
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

import { TranslateModule } from '@ngx-translate/core';
import { HydrationPipe } from './pipes/hydration.pipe';

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
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
