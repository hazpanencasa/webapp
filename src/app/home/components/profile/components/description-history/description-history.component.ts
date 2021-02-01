import { Input } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { User } from "@core/model/users.model";
import { AuthService } from "@core/service/auth/auth.service";

@Component({
  selector: "app-description-history",
  templateUrl: "./description-history.component.html",
  styleUrls: ["./description-history.component.sass"],
})
export class DescriptionHistoryComponent implements OnInit {
  currenteUser: User;
  @Input() numberProductions: number;
  @Input() numberIngredients: number;
  @Input() numberFormulas: number;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getCurrentUser().then((user) => {
      return (this.currenteUser = user);
    });
  }
}
