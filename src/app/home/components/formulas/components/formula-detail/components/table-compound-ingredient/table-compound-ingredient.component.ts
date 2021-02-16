import { Component, OnInit, Input } from "@angular/core";
import { Formula } from "@core/model/formulas.model";

@Component({
  selector: "app-table-compound-ingredient",
  templateUrl: "./table-compound-ingredient.component.html",
  styleUrls: ["./table-compound-ingredient.component.sass"],
})
export class TableCompoundIngredientComponent implements OnInit {
  @Input() formula: Formula;
  @Input() fontSize: number;
  totalPercentage = 0;
  totalGrams = 0;
  constructor() {}

  ngOnInit() {
    this.getTotalPercentage();
    this.getTotalGrams(
      this.formula.unit_weight,
      this.formula.steps[7].ingredients[0].percentage
    );
  }

  getTotalPercentage() {
    const arrayIterator = this.formula.steps[7].ingredients[0].ingredient
      .formula.ingredients;
    for (let i = 0; i < arrayIterator.length; i++) {
      this.totalPercentage += arrayIterator[i].percentage;
    }
    return this.totalPercentage;
  }
  getTotalGrams(totalGrams: string, totalPercentage: number) {
    return (this.totalGrams =
      (parseInt(totalGrams, 0) * totalPercentage) / 100);
  }
  getIngredientsGrams(
    totalGrams: number,
    totalPercentage: number,
    percentageIngredients: number
  ) {
    return (totalGrams * percentageIngredients) / totalPercentage;
  }
}
