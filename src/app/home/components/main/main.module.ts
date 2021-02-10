import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BannerComponent } from "./components/banner/banner.component";
import { GalleryComponent } from "./components/gallery/gallery.component";
import { InfoComponent } from "./components/info/info.component";
import { MainComponent } from "./components/main/main.component";
import { MainRoutingModule } from "./main-routing.module";
import { VideoComponent } from "./components/video/video.component";

@NgModule({
  declarations: [
    MainComponent,
    BannerComponent,
    GalleryComponent,
    InfoComponent,
    VideoComponent,
  ],
  imports: [CommonModule, MainRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MainModule {}
