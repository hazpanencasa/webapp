import { Component, OnInit, Input } from '@angular/core';
import { Formula, IngredientsSecondRequest } from '@core/model/formulas.model';

@Component({
  selector: 'app-table-ingredient',
  templateUrl: './table-ingredient.component.html',
  styleUrls: ['./table-ingredient.component.sass'],
})
export class TableIngredientComponent implements OnInit {
  @Input() fontSize: number;
  @Input() ingredientsInput: any[];
  @Input() formula: Formula;
  @Input() totalPercentage: number;
  constructor() {}

  ngOnInit() {
    if (this.ingredientsInput) {
      console.log(this.ingredientsInput);
    }
  }
}
