import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LayoutModule} from "@angular/cdk/layout";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatBadgeModule} from "@angular/material/badge";
import {MatDialogModule} from "@angular/material/dialog";
import {MatDividerModule} from "@angular/material/divider";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatRadioModule} from "@angular/material/radio";
import {MatCardModule} from "@angular/material/card";
import {MatSliderModule} from "@angular/material/slider";

import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatCheckboxModule} from "@angular/material/checkbox";

import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatMenuModule} from "@angular/material/menu";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatStepperModule} from "@angular/material/stepper";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatExpansionModule} from "@angular/material/expansion";

@NgModule({
  declarations: [],
  imports: [
    MatSliderModule,
    CommonModule,
    MatDividerModule,
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
    MatDialogModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatCheckboxModule,
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatBadgeModule,
    MatSelectModule,
    MatRadioModule,
    MatTableModule,
    MatSidenavModule,
    MatDialogModule,
    MatListModule,
    MatMenuModule,
    MatGridListModule,
    MatPaginatorModule,
    MatSortModule,
    LayoutModule,
    MatFormFieldModule,
    MatStepperModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatSliderModule,
    MatCheckboxModule,
  ],
})
export class MaterialModule {}
