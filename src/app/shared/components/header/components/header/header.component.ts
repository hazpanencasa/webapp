import {Component, OnInit, HostListener} from "@angular/core";
import {Router} from "@angular/router";
import {AuthService} from "@core/service/auth/auth.service";
import Swal from "sweetalert2";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.sass"],
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
  scroll: boolean = false;
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
          this.router.navigate(["auth/login"]);
        }
      });
    });
  }
}
