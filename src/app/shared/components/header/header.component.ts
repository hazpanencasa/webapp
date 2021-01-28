import { Component, OnInit, HostListener, Input } from "@angular/core";
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import { AuthService } from "@core/service/auth/auth.service";
import { Observable } from "rxjs";
import { modalLogout } from "@utils/modal";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.sass"],
})
export class HeaderComponent implements OnInit {
  @Input() clickToggle: boolean;
  scroll = false;
  title = "";
  user$: Observable<any> = this.af.user;
  userName: string;
  userEmail: string;

  constructor(
    private af: AngularFireAuth,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getCurrentUser();
  }

  @HostListener("document:scroll")
  scrollFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.scroll = true;
    } else {
      this.scroll = false;
    }
  }
  getCurrentUser() {
    this.authService.getCurrentUser().then((Response) => {
      this.userName = Response.displayName;
      this.userEmail = Response.email;
    });
  }
  logOut() {
    modalLogout().then((result) => {
      if (result.isConfirmed) {
        this.authService.logOut().then(() => {
          this.router.navigate(["login"]);
        });
      }
    });
  }
}
