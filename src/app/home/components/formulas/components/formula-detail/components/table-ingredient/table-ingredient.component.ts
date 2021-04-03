import { Component, OnInit, Input } from '@angular/core';
import { Formula } from '@core/model/formulas.model';

@Component({
  selector: 'app-table-ingredient',
  templateUrl: './table-ingredient.component.html',
  styleUrls: ['./table-ingredient.component.sass'],
})
export class TableIngredientComponent implements OnInit {
  @Input() fontSize: number;
  @Input() ingredientsInput: any;
  @Input() formula: Formula;
  @Input() totalPercentage: number;
  resultPercent = 0;
  resultGrams = 0;
  totalWeight: number;
  arrayOutput: Array<any>;
  resultPercentage: any;
  totalGrams: number;
  constructor() {}

  ngOnInit() {
    this.sortIngredients();
  }
  transformStringToNumber(s: string, r?: number) {
    return parseInt(s, r);
  }
  getGramsIngredients(percentage: number) {
    const result = (percentage * this.totalWeight) / this.totalPercentage;
    return result.toFixed(1);
  }
  sortIngredients() {
    this.arrayOutput = this.ingredientsInput.sort((a, b) => {
      return b.percentage - a.percentage;
    });
    this.totalWeight =
      parseInt(this.formula.unit_weight, 0) * parseInt(this.formula.units, 0);
  }
}
