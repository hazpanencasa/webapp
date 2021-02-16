import { Component, OnInit, Input } from "@angular/core";
import { Formula } from "@core/model/formulas.model";

@Component({
  selector: "app-table-ingredient",
  templateUrl: "./table-ingredient.component.html",
  styleUrls: ["./table-ingredient.component.sass"],
})
export class TableIngredientComponent implements OnInit {
  @Input() fontSize: number;
  arrayPercent = [];
  resultPercent = 0;
  resultGrams = 0;
  @Input() formula: Formula;
  constructor() {}

  ngOnInit() {
    this.formula.ingredients.forEach((ingredient) => {
      this.arrayPercent.push(ingredient.percentage);
    });
    const result = this.arrayPercent.reduce((a, b) => a + b, 0);
    this.resultPercent = result.toFixed(1);
  }
  transformStringToNumber(s: string, r?: number) {
    return parseInt(s, r);
  }
}
