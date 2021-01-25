import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubHomeRoutingModule } from './sub-home-routing.module';
import { SubHomeComponent } from './sub-home/sub-home.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [SubHomeComponent],
  imports: [
    CommonModule,
    SubHomeRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ]
})
export class SubHomeModule { }
