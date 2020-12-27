import {Component, OnInit, HostListener, Input} from "@angular/core";
import {Router} from "@angular/router";
import {AngularFireAuth} from "@angular/fire/auth";
import {AuthService} from "@core/service/auth/auth.service";
import {Observable} from "rxjs";

import Swal from "sweetalert2";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.sass"],
})
export class HeaderComponent implements OnInit {
  scroll: boolean = false;
  @Input() clickToggle: boolean;
  user$: Observable<any> = this.af.user;
  constructor(
    private af: AngularFireAuth,
    private authService: AuthService,
    private router: Router
  ) {}
  async ngOnInit() {
    // this.user = await this.authService.getCurrentUser();
    // if (this.user) {
    //   this.isLoggin = true;
    // }
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
    this.authService.logout().then(() => {
      Swal.fire({
        title: "Are you sure you want to log out?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#f5a637",
        cancelButtonColor: "#d33",
        confirmButtonText: "Log Out 🙋",
        position: "center",
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(["login"]);
        }
      });
    });
  }
}
