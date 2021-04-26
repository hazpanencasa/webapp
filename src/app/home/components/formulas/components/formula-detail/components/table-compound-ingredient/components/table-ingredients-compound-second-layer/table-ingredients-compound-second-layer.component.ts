import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-ingredients-compound-second-layer',
  templateUrl: './table-ingredients-compound-second-layer.component.html',
  styleUrls: ['./table-ingredients-compound-second-layer.component.sass'],
})
export class TableIngredientsCompoundSecondLayerComponent implements OnInit {
  @Input() ingredientsCompoundTable: Array<any>;
  @Input() ingredientsCompound: Array<any>;
  @Input() ingredientsCompoundCollection: Array<any>;
  @Input() weightTotal: number;
  @Input() totalPercentage: number;
  @Input() formulaId: number;
  @Input() fontSize: number;
  resultPercentage: number;
  totalGrams: number;
  constructor() {}

  ngOnInit() {}
  getTotalPercentage(ingredient: any): number {
    ingredient.reduce((a: any, b: { percentage: any }) => {
      return (this.resultPercentage = a + b.percentage);
    }, 0);
    return this.resultPercentage;
  }
  getTotalGrams(ingredient: any): number {
    const percentageResult = ingredient.reduce(
      (a: any, b: { percentage: any }) => {
        return a + b.percentage;
      },
      0
    );
    this.totalGrams =
      (this.weightTotal * percentageResult) / this.totalPercentage;
    return this.totalGrams;
  }
}
