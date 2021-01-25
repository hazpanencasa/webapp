import { Component, OnInit, HostListener, Input } from "@angular/core";
import { Router, ActivatedRoute, Params, ParamMap } from "@angular/router";
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

  constructor(
    private af: AngularFireAuth,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    console.log(this.route.snapshot.children);
    console.log(this.route.snapshot.component);
    console.log(this.route.snapshot.data);
    console.log(this.route.snapshot.parent);
    console.log(this.route.snapshot.pathFromRoot);
    console.log(this.route.snapshot.root);
    console.log(this.route.snapshot.url);
  }

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
        this.authService.logOut().then(() => {
          this.router.navigate(["login"]);
        });
      }
    });
  }
}
