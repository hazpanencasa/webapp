import { Component, OnInit, Input } from '@angular/core';
import { Formula } from '@core/model/formulas.model';

@Component({
  selector: 'app-table-ingredient',
  templateUrl: './table-ingredient.component.html',
  styleUrls: ['./table-ingredient.component.sass'],
})
export class TableIngredientComponent implements OnInit {
  @Input() fontSize: number;
  @Input() ingredients: any;
  @Input() formula: Formula;
  percentageTotal: number;
  resultPercent = 0;
  resultGrams = 0;
  totalWeight: number;
  constructor() {}

  ngOnInit() {
    const result = this.ingredients.reduce(
      (output: any, currentElement: { percentage: any }) => {
        return output + currentElement.percentage;
      },
      0
    );
    this.percentageTotal = result;
    this.totalWeight =
      parseInt(this.formula.unit_weight, 0) * parseInt(this.formula.units, 0);
  }
  transformStringToNumber(s: string, r?: number) {
    return parseInt(s, r);
  }
}
