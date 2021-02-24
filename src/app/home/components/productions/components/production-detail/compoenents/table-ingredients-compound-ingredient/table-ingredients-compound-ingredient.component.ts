import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-table-ingredients-compound-ingredient",
  templateUrl: "./table-ingredients-compound-ingredient.component.html",
  styleUrls: ["./table-ingredients-compound-ingredient.component.sass"],
})
export class TableIngredientsCompoundIngredientComponent implements OnInit {
  @Input() ingredients: Array<any>;
  @Input() units: number;
  @Input() unitWeight: string;
  totalPercentage: number;
  totalGrams = 0;
  constructor() {}

  ngOnInit() {
    this.getTotalGrams(this.unitWeight, this.ingredients[0].bakers_percentage);
    this.getTotalPercentage();
  }
  getIngredientsGrams(
    totalGrams: number,
    totalPercentage: number,
    percentageIngredients: number
  ) {
    return (totalGrams * percentageIngredients) / totalPercentage;
  }
  getTotalGrams(totalGrams: string, totalPercentage: number) {
    return (this.totalGrams =
      (parseInt(totalGrams, 0) * totalPercentage) / 100);
  }
  getTotalPercentage() {
    const ingredients = this.ingredients[0].ingredient.formula.ingredients;
    const percentageTotal = ingredients.reduce(
      (output: any, currentValue: { percentage: any }) => {
        return output + currentValue.percentage;
      },
      0
    );
    this.totalPercentage = percentageTotal;
  }
}
