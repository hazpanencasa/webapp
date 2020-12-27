import {Component, OnInit} from "@angular/core";
import {IngredientsService} from "@core/service/ingredients/ingredients.service";
import {Ingredient} from "@core/model/ingredients.model";
@Component({
  selector: "app-ingredients",
  templateUrl: "./ingredients.component.html",
  styleUrls: ["./ingredients.component.sass"],
})
export class IngredientsComponent implements OnInit {
  ingredients: Ingredient[];
  constructor(private ingredientsService: IngredientsService) {}

  ngOnInit() {
    this.fetchIngredients();
  }

  async fetchIngredients() {
    try {
      this.ingredientsService.getIngredients().subscribe((ingredients) => {
        console.log(ingredients);
      });
    } catch (error) {
      console.log(error);
    }
  }
}
