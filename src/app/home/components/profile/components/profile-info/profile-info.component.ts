import { Component, Input, OnInit } from "@angular/core";
import { AuthService } from "@core/service/auth/auth.service";
import { FormulasService } from "@core/service/formulas/formulas.service";
import { IngredientsService } from "@core/service/ingredients/ingredients.service";
import { ProductionsService } from "@core/service/productions/productions.service";

@Component({
  selector: "app-profile-info",
  templateUrl: "./profile-info.component.html",
  styleUrls: ["./profile-info.component.sass"],
})
export class ProfileInfoComponent implements OnInit {
  @Input() userName: string;
  outputArray = [];
  outputArrayFormulas = [];
  outputArrayIngredients = [];
  outputArrayProductions = [];
  currentUserEmail = "";
  constructor(
    private authService: AuthService,
    private formulasService: FormulasService,
    private ingredientsService: IngredientsService,
    private productionsService: ProductionsService
  ) {}

  ngOnInit() {
    this.authService.getCurrentUser().then((user) => {
      this.currentUserEmail = user.email;
    });
    this.formulasFilterEmail();
    this.ingredientsFilterEmail();
    this.productionFilterEmail();
  }
  formulasFilterEmail() {
    this.formulasService.getFormulas().subscribe((formulas) => {
      const newArray = formulas.filter((formula) => {
        if (formula.user.creator.email === this.currentUserEmail) {
          return formula;
        }
      });
      const firstThreeArray = newArray.slice(0, 3);
      return firstThreeArray.forEach((element) =>
        this.outputArrayFormulas.push(element)
      );
    });
  }
  ingredientsFilterEmail() {
    this.ingredientsService.getIngredients().subscribe((ingredients) => {
      const newArray = ingredients.filter((ingredient) => {
        if (ingredient.creator === this.currentUserEmail) {
          return ingredient;
        }
      });
      const firstThreeArray = newArray.slice(0, 3);
      return firstThreeArray.forEach((element) =>
        this.outputArrayIngredients.push(element)
      );
    });
  }
  productionFilterEmail() {
    this.productionsService.getProductions().subscribe((productions) => {
      const newArray = productions.filter((production) => {
        if (production.user.creator.email === this.currentUserEmail) {
          return production;
        }
      });
      const firstThreeArray = newArray.slice(0, 3);
      return firstThreeArray.forEach((element) =>
        this.outputArrayProductions.push(element)
      );
    });
  }
}
