import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LayoutModule} from "@angular/cdk/layout";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatBadgeModule} from "@angular/material/badge";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatRadioModule} from "@angular/material/radio";
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatMenuModule} from "@angular/material/menu";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatStepperModule} from "@angular/material/stepper";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatBadgeModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatTableModule,
    MatListModule,
    MatMenuModule,
    MatGridListModule,
    MatPaginatorModule,
    MatSortModule,
    LayoutModule,
    MatFormFieldModule,
    MatStepperModule,
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatBadgeModule,
    MatSelectModule,
    MatRadioModule,
    MatTableModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatGridListModule,
    MatPaginatorModule,
    MatSortModule,
    LayoutModule,
    MatFormFieldModule,
    MatStepperModule,
  ],
})
export class MaterialModule {}
