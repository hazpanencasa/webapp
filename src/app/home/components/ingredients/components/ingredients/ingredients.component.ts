import {Component, OnInit} from "@angular/core";
import {IngredientsService} from "@core/service/ingredients/ingredients.service";
import {Ingredient} from "@core/model/ingredients.model";
@Component({
  selector: "app-ingredients",
  templateUrl: "./ingredients.component.html",
  styleUrls: ["./ingredients.component.sass"],
})
export class IngredientsComponent implements OnInit {
  constructor(private ingredientsService: IngredientsService) {}

  ngOnInit() {
    this.ingredientsService.getIngredients().subscribe((ingredients) => {
      console.log(ingredients);
    });
  }
}
