import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IngredientProduction } from '@core/model/ingredient-production';
import { Ingredient } from '@core/model/ingredients.model';
import { IngredientsService } from '@core/service/ingredients/ingredients.service';
@Component({
  selector: 'app-ingredient-detail',
  templateUrl: './ingredient-detail.component.html',
  styleUrls: ['./ingredient-detail.component.sass'],
})
export class IngredientDetailComponent implements OnInit {
  ingredient: Ingredient;
  ingredientCompound: any[];
  constructor(
    private route: ActivatedRoute,
    private ingredientsService: IngredientsService
  ) {}

  ngOnInit() {
    // tslint:disable-next-line: deprecation
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchIngredient(id);
      this.fetchIngredientCompound(id);
    });
  }
  fetchIngredient(id: string) {
    // tslint:disable-next-line: deprecation
    this.ingredientsService.getIngredient(id).subscribe((ingredient) => {
      this.ingredient = ingredient;
      // console.log(this.ingredient.formula);
    });
  }
  fetchIngredientCompound(id: string) {
    this.ingredientsService
      .getIngredientCompound(id)
      // tslint:disable-next-line: deprecation
      .subscribe((ingredients) => {
        this.ingredientCompound = ingredients;
      });
  }
}
