import { Component, Input, OnInit } from "@angular/core";
import { User } from "@core/model/users.model";
import { AuthService } from "@core/service/auth/auth.service";

@Component({
  selector: "app-description-img",
  templateUrl: "./description-img.component.html",
  styleUrls: ["./description-img.component.sass"],
})
export class DescriptionImgComponent implements OnInit {
  userEmail: string;
  userName: string;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.getCurrentUser().then((Response) => {
      console.log(Response);
      this.userName = Response.displayName;
      this.userEmail = Response.email;
    });
  }
}
