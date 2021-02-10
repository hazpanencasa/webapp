import { Component, OnInit } from "@angular/core";
import { modalGallery } from "@utils/modal";
import { Router } from "@angular/router";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.sass"],
})
export class GalleryComponent implements OnInit {
  constructor(private router: Router) {}
  imagesBread: Array<any> = [
    {
      img: "assets/images/img-2.png",
    },
    {
      img: "assets/images/img-1.png",
    },
    {
      img: "assets/images/bollo.png",
    },
    {
      img: "assets/images/img-3.png",
    },
    {
      img: "assets/images/img-4.png",
    },
    {
      img: "assets/images/panCanilla.png",
    },
    {
      img: "assets/images/img-2.png",
    },
    {
      img: "assets/images/img-info2.png",
    },
  ];
  ngOnInit() {}
  showModal(img: string) {
    modalGallery(img).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(["home/productions"]);
      }
    });
  }
}
