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
    this.getCurrentUser();
  }
  getCurrentUser() {
    this.authService.getCurrentUser().then((user) => {
      this.user = user;
    });
  }
  fetchProductions() {
    const productionArray = [];
    this.productions.getProductions().subscribe((production) => {
      production.forEach((prod) => {
        const userEmail = prod.user.creator.email;
        productionArray.push(userEmail);
      });
      return (this.reducedProductions = this.reduceArray(productionArray));
    });
  }
  fetchFormulas() {
    const formulaArray = [];
    this.formulas.getFormulas().subscribe((formula) => {
      formula.forEach((form) => {
        const userEmail = form.user.creator.email;
        formulaArray.push(userEmail);
      });
      return (this.reducedFormulas = this.reduceArray(formulaArray));
    });
  }
  fetchIngredients() {
    const ingredientArray = [];
    this.ingredients.getIngredients().subscribe((ingredient) => {
      ingredient.forEach((ingres) => {
        const userEmail = ingres.creator;
        ingredientArray.push(userEmail);
      });
      return (this.reducedIngredients = this.reduceArray(ingredientArray));
    });
  }
  reduceArray(array: Array<any>) {
    const otherArry = array.filter((email) => {
      if (email === this.user.email) {
        // if (email === "timoto@gmail.com") {
        return true;
      }
    });
    return otherArry.length;
  }
}
