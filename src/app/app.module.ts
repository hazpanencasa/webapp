import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AngularFireModule} from "@angular/fire";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {environment} from "../environments/environment";
import {AngularFireAuthModule} from "@angular/fire/auth";
import {AngularFireStorageModule} from "@angular/fire/storage";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
