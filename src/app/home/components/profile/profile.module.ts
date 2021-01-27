import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProfileRoutingModule } from "./profile-routing.module";
import { ProfileComponent } from "./components/profile/profile.component";
import { DescriptionImgComponent } from "./components/description-img/description-img.component";
import { DescriptionHistoryComponent } from "./components/description-history/description-history.component";
import { GravatarModule, GravatarConfig, FALLBACK, RATING } from "ngx-gravatar";
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';
const gravatarConfig: GravatarConfig = {
  fallback: FALLBACK.robohash,
  rating: RATING.x,
  backgroundColor: "#881918",
};

@NgModule({
  declarations: [
    ProfileComponent,
    DescriptionImgComponent,
    DescriptionHistoryComponent,
    ProfileInfoComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    GravatarModule.forRoot(gravatarConfig),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProfileModule {}
