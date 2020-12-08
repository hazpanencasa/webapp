import {Component, OnInit} from "@angular/core";
import {AuthService} from "@core/service/auth/auth.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.sass"],
})
export class HomeComponent implements OnInit {
  public user: any;
  constructor(private authService: AuthService) {}

  async ngOnInit() {
    this.user = await this.authService.getCurrentUser();
    if (this.user) {
      console.log("user =>", this.user);
    }
  }
}
