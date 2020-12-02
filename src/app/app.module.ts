import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AngularFireModule} from "@angular/fire";
import {HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {environment} from "../environments/environment";
import {AngularFireAuthModule} from "@angular/fire/auth";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {AngularFireStorageModule} from "@angular/fire/storage";
import {FormulasComponent} from "./formulas/formulas.component";
import {IngredientsComponent} from "./ingredients/ingredients.component";
import {ProductionsComponent} from "./productions/productions.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {SharedModule} from "./shared/shared.module";
import {CoreModule} from "./core/core.module";
@NgModule({
  declarations: [
    AppComponent,
    FormulasComponent,
    IngredientsComponent,
    ProductionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
