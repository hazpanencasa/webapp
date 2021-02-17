import { AfterViewInit, Component, Input, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { AuthService } from "@core/service/auth/auth.service";
import { modalLogout } from "@utils/modal";
import { Observable } from "rxjs";

@Component({
  selector: "app-description-img",
  templateUrl: "./description-img.component.html",
  styleUrls: ["./description-img.component.sass"],
})
export class DescriptionImgComponent implements OnInit {
  user$: Observable<any> = this.af.user;
  @Input() numberFormulas: number;
  @Input() numberIngredients: number;
  @Input() numberProduction: number;
  outPutArray = [];
  userEmail: string;
  userName: string;
  userUdi: string;
  highLights: Array<any> = [
    {
      title: "Lord Panadero",
      icon: "assets/images/Pasos/Pasos_PNG/icon-1.png",
      number_formula: 3,
    },
    {
      title: "Menor tiempo en cocina",
      icon: "assets/images/Pasos/Pasos_PNG/icon-5.png",
      number_formula: 2,
    },
    {
      title: "Jedi Baker",
      icon: "assets/images/Pasos/Pasos_PNG/icon-4.png",
      number_formula: 4,
    },
    {
      title: "Keep Learning",
      icon: "assets/images/Pasos/Pasos_PNG/icon-2.png",
      number_formula: 0,
    },
  ];

  constructor(
    private auth: AuthService,
    private router: Router,
    private af: AngularFireAuth
  ) {}

  ngOnInit() {
    this.getCurrentUser();
    const addAllIngredientAndFormulasAndProductions = 10;
    if (addAllIngredientAndFormulasAndProductions >= 2) {
      this.highLights.filter((highlight) => {
        if (highlight.number_formula > 1) {
          return this.outPutArray.push(highlight);
        }
      });
    } else if (addAllIngredientAndFormulasAndProductions <= 0) {
      this.highLights.filter((highlight) => {
        if (highlight.number_formula === 0) {
          return this.outPutArray.push(highlight);
        }
      });
    }
  }
  getCurrentUser() {
    this.auth.getCurrentUser().then((Response) => {
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
