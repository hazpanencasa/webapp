import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "@core/service/auth/auth.service";
import { modalLogout } from "@utils/modal";

@Component({
  selector: "app-description-img",
  templateUrl: "./description-img.component.html",
  styleUrls: ["./description-img.component.sass"],
})
export class DescriptionImgComponent implements OnInit {
  userEmail: string;
  userName: string;
  userUdi: string;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.getCurrentUser();
  }
  getCurrentUser() {
    this.auth.getCurrentUser().then((Response) => {
      console.log(Response);
      this.userName = Response.displayName;
      this.userEmail = Response.email;
      this.userUdi = Response.uid;
    });
  }
  logOut() {
    modalLogout().then((result) => {
      if (result.isConfirmed) {
        this.auth.logOut().then(() => {
          this.router.navigate(["login"]);
        });
      }
    });
  }
}
