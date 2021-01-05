import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {Ingredient} from "@core/model/ingredients.model";
import {IngredientsService} from "@core/service/ingredients/ingredients.service";
@Component({
  selector: "app-ingredient-detail",
  templateUrl: "./ingredient-detail.component.html",
  styleUrls: ["./ingredient-detail.component.sass"],
})
export class IngredientDetailComponent implements OnInit {
  ingredient: Ingredient;
  constructor(
    private route: ActivatedRoute,
    private ingredientsService: IngredientsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchIngredient(id);
    });
  }
  fetchIngredient(id: string) {
    this.ingredientsService.getIngredient(id).subscribe((ingredient) => {
      this.ingredient = ingredient;
    });
  }
}
