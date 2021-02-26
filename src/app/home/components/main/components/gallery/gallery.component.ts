import { Component, OnInit } from '@angular/core';
import { modalGallery } from '@utils/modal';
import { Post } from '@core/model/post';
import { InstagramService } from '@core/service/instagram/instagram.service';
import { NgxMasonryOptions } from 'ngx-masonry';
import { animate, style } from '@angular/animations';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.sass'],
})
export class GalleryComponent implements OnInit {
  constructor(private instagramService: InstagramService) {}
  imagesBread: Post[];
  myOptions: NgxMasonryOptions = {
    gutter: 10,
    // itemSelector: 'masonry-item',
    // columnWidth: 120,
    percentPosition: false,
    fitWidth: true,
    // originLeft: true,
    // originTop: true,
    resize: true,
    // // initLayout: false,
    // horizontalOrder: false,
    animations: {
      show: [
        style({ opacity: 0 }),
        animate('400ms ease-in', style({ opacity: 1 })),
      ],
      hide: [
        style({ opacity: '*' }),
        animate('400ms ease-in', style({ opacity: 0 })),
      ],
    },
  };
  ngOnInit() {
    this.fetchAllPost();
  }
  showModal(img: string, link: string) {
    modalGallery(img).then((result) => {
      if (result.isConfirmed) {
        window.location.href = link;
      }
    });
  }
  fetchAllPost() {
    this.instagramService.getAllPost().subscribe((post: any) => {
      this.imagesBread = post.data;
    });
  }
}
