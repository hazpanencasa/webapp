import { Component, OnInit } from '@angular/core';
import { Post } from '@core/model/post';
import { InstagramService } from '@core/service/instagram/instagram.service';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.sass'],
})
export class InfoComponent implements OnInit {
  constructor(private instagramService: InstagramService) {}
  post: Post[];
  ngOnInit() {
    // this.fetchAllPost();
  }
  // fetchAllPost() {
  //   // tslint:disable-next-line: deprecation
  //   this.instagramService.getAllPost().subscribe((post: any) => {
  //     this.post = post.data.slice(0, 3);
  //   });
  // }
}
