import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { DescriptionImgComponent } from './components/description-img/description-img.component';
import { DescriptionHistoryComponent } from './components/description-history/description-history.component';
import { GravatarModule, GravatarConfig, FALLBACK, RATING } from 'ngx-gravatar';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

import { TranslateModule } from '@ngx-translate/core';
const gravatarConfig: GravatarConfig = {
  fallback: FALLBACK.robohash,
  rating: RATING.x,
  backgroundColor: '#881918',
};

@NgModule({
  declarations: [
    ProfileComponent,
    DescriptionImgComponent,
    DescriptionHistoryComponent,
    ProfileInfoComponent,
    EditProfileComponent,
    ResetPasswordComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProfileRoutingModule,
    GravatarModule.forRoot(gravatarConfig),
    ReactiveFormsModule,
    TranslateModule,
    FormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProfileModule {}
