import { Component, OnInit } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";
import { IngredientsService } from "@core/service/ingredients/ingredients.service";
import { Ingredient } from "@core/model/ingredients.model";

@Component({
  selector: "app-ingredients",
  templateUrl: "./ingredients.component.html",
  styleUrls: ["./ingredients.component.sass"],
})
export class IngredientsComponent implements OnInit {
  constructor(private ingredientsService: IngredientsService) {}
  filterIngredients = "";
  ingredients: Ingredient[];
  pageSizeOptions: number[] = [3, 6, 9];
  pageEvent: PageEvent;
  pageSize = 9;
  pageNumber = 1;
  ngOnInit() {
    this.fetchIngredients();
  }

  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageNumber = event.pageIndex + 1;
  }
  fetchIngredients() {
    this.ingredientsService.getIngredients().subscribe((ingredients) => {
      this.ingredients = ingredients;
    });
  }
}
