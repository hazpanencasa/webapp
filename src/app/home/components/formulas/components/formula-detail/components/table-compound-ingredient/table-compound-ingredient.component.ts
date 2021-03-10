import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Formula } from '@core/model/formulas.model';

@Component({
  selector: 'app-table-compound-ingredient',
  templateUrl: './table-compound-ingredient.component.html',
  styleUrls: ['./table-compound-ingredient.component.sass'],
})
export class TableCompoundIngredientComponent implements OnInit {
  @Input() formula: Formula;
  @Input() fontSize: number;
  ingredients: Array<any>;
  formulaCompound: Array<any>;
  resultPercentage = 0;
  totalGrams = 0;
  grams = 0;
  constructor() {}

  ngOnInit() {
    const result = [];
    const ingredientsCompound = this.formula.steps.filter(
      (step) => step.ingredients
    );
    this.ingredients = ingredientsCompound;
    ingredientsCompound.forEach((ingredient) => {
      ingredient.ingredients.filter((element) => {
        if (element.ingredient.formula) {
          result.push(element.ingredient.formula);
        }
        return result;
      });
    });
    this.formulaCompound = result;
  }
  getTotalPercentage(ingredient: any) {
    ingredient.reduce((a: any, b: { percentage: any }) => {
      this.resultPercentage = a + b.percentage;
    }, 0);
    return this.resultPercentage.toFixed(1);
  }
  getTotalGrams(ingredient: any) {
    const weight = parseInt(this.formula.unit_weight, 10);
    const unit = parseInt(this.formula.units, 10);
    const weightTotal = weight * unit;
    const percentageResult = ingredient.reduce(
      (a: any, b: { percentage: any }) => {
        return a + b.percentage;
      },
      0
    );
    this.totalGrams = (weightTotal * percentageResult) / 100;
    return this.totalGrams.toFixed(1);
  }
  getIngredientsGrams(percentage: number) {
    const weight = parseInt(this.formula.unit_weight, 10);
    const unit = parseInt(this.formula.units, 10);
    const weightTotal = weight * unit;
    this.grams = (weightTotal * percentage) / 100;
    return this.grams.toFixed(1);
  }
  validation(ingredient: any) {
    let result = true;
    ingredient.forEach((element) => {
      if (element.ingredient.formula) {
        result = true;
      } else {
        result = false;
      }
    });
    return result;
  }
}
