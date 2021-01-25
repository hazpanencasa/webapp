import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
// import {AuthService} from "@core/service/auth/auth.service";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../material/material.module";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { LayoutModule } from "@angular/cdk/layout";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { FilterPipe } from "./pipes/filter.pipe";
import { PaginatePipe } from "./pipes/paginate.pipe";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    FilterPipe,
    PaginatePipe,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    LayoutModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    FilterPipe,
    MaterialModule,
    PaginatePipe,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
