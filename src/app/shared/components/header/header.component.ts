import {Component, OnInit, HostListener, Input} from "@angular/core";
import {Router} from "@angular/router";
import {AngularFireAuth} from "@angular/fire/auth";
import {AuthService} from "@core/service/auth/auth.service";
import {Observable} from "rxjs";
import {modalLogout} from "@utils/modal";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.sass"],
})
export class HeaderComponent implements OnInit {
  scroll = false;

  @Input() clickToggle: boolean;

  user$: Observable<any> = this.af.user;
  constructor(
    private af: AngularFireAuth,
    private authService: AuthService,
    private router: Router
  ) {}
  ngOnInit() {}

  @HostListener("document:scroll")
  scrollFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.scroll = true;
    } else {
      this.scroll = false;
    }
  }

  logOut() {
    modalLogout().then((result) => {
      if (result.isConfirmed) {
        this.authService.logout().then(() => {
          this.router.navigate(["login"]);
        });
      }
    });
  }
}
