import { Component, OnInit } from "@angular/core";
import { FormulasService } from "@core/service/formulas/formulas.service";
import { IngredientsService } from "@core/service/ingredients/ingredients.service";
import { ProductionsService } from "@core/service/productions/productions.service";
import { AuthService } from "@core/service/auth/auth.service";
import { User } from "@core/model/users.model";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.sass"],
})
export class ProfileComponent implements OnInit {
  user: User;
  reducedFormulas: number;
  reducedProductions: number;
  reducedIngredients: number;
  constructor(
    private authService: AuthService,
    private formulas: FormulasService,
    private productions: ProductionsService,
    private ingredients: IngredientsService
  ) {}

  ngOnInit() {
    this.fetchFormulas();
    this.fetchIngredients();
    this.fetchProductions();
  }
  fetchProductions() {
    const productionArray = [];
    this.productions.getProductions().subscribe((production) => {
      production.forEach((prod) => {
        const userEmail = prod.user.creator.email;
        productionArray.push(userEmail);
      });
      this.reducedProductions = this.reduceArray(productionArray);
    });
  }
  fetchFormulas() {
    const formulaArray = [];
    this.formulas.getFormulas().subscribe((formula) => {
      formula.forEach((form) => {
        const userEmail = form.user.creator.email;
        formulaArray.push(userEmail);
      });
      this.reducedFormulas = this.reduceArray(formulaArray);
    });
  }
  fetchIngredients() {
    const ingredientArray = [];
    this.ingredients.getIngredients().subscribe((ingredient) => {
      ingredient.forEach((ingre) => {
        const userEmail = ingre.creator;
        ingredientArray.push(userEmail);
      });
      this.reducedIngredients = this.reduceArray(ingredientArray);
    });
  }
  reduceArray(array: Array<any>) {
    let userEmail = "";
    this.authService.getCurrentUser().then((user) => (userEmail = user.email));
    const otherArry = array.filter((email) => {
      if (email === "timoto@gmail.com") {
        // if (email === userEmail) {
        return true;
      }
    });
    return otherArry.length;
  }
}
