import { Component, OnInit, Input } from "@angular/core";
import { Formula } from "@core/model/formulas.model";

@Component({
  selector: "app-table3",
  templateUrl: "./table3.component.html",
  styleUrls: ["./table3.component.sass"],
})
export class Table3Component implements OnInit {
  @Input() fontSize: number;
  totalPercentage: number = 0;
  totalGrams: number = 0;
  @Input() formula: Formula;
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
    return (this.totalGrams = (parseInt(totalGrams) * totalPercentage) / 100);
  }
  getIngredientsGrams(
    totalGrams: number,
    totalPercentage: number,
    percentageIngredients: number
  ) {
    return (totalGrams * percentageIngredients) / totalPercentage;
  }
}
