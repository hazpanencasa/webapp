import { Input } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { Formula } from "@core/model/formulas.model";

@Component({
  selector: "app-table-compound-ingredient2",
  templateUrl: "./table-compound-ingredient2.component.html",
  styleUrls: ["./table-compound-ingredient2.component.sass"],
})
export class TableCompoundIngredient2Component implements OnInit {
  totalPercentage: number;
  totalGrams: number;
  @Input() formula: Formula;
  @Input() fontSize: number;

  constructor() {}

  ngOnInit() {
    const percentageArray = [];
    this.formula.ingredients[7].ingredient.formula.ingredients.filter(
      (element: { percentage: any }) =>
        element.percentage ? percentageArray.push(element.percentage) : null
    );
    const result = percentageArray.reduce((a, b) => a + b, 0);
    this.totalPercentage = result;
  }
  getTotalGrams(totalPercentage: number) {
    const result = parseInt(this.formula.unit_weight, 0);
    return (this.totalGrams = (result * totalPercentage) / 100);
  }
  getIngredientsGrams(
    totalGrams: number,
    totalPercentage: number,
    percentageIngredients: number
  ) {
    return (totalGrams * percentageIngredients) / totalPercentage;
  }
}
