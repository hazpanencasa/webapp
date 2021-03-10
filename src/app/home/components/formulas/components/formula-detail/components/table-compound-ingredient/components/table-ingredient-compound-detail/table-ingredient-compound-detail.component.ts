import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-ingredient-compound-detail',
  templateUrl: './table-ingredient-compound-detail.component.html',
  styleUrls: ['./table-ingredient-compound-detail.component.sass'],
})
export class TableIngredientCompoundDetailComponent implements OnInit {
  @Input() ingredients: Array<any>;
  @Input() weight: string;
  @Input() unit: string;
  ingredientsCompound: Array<any>;
  resultPercentage: any;
  grams: number;
  totalGrams: number;
  constructor() {}

  ngOnInit() {
    let num = 0;
    this.ingredients.forEach((element) => {
      return element.ingredients.reduce((a, b) => {
        return (num = a + b.percentage);
      }, 0);
    });
  }
  getTotalPercentage(ingredient: any) {
    const result = ingredient.reduce((a, b) => {
      return a + b.percentage;
    }, 0);
    return result.toFixed(1);
  }
  getTotalGrams(ingredient: any) {
    const weight = parseInt(this.weight, 10);
    const unit = parseInt(this.unit, 10);
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
  getIngredientsGrams(
    percentage: number,
    ingredient: any,
    ingredientPercentage: any
  ) {
    const weight = parseInt(this.weight, 10);
    const unit = parseInt(this.unit, 10);
    const weightTotal = weight * unit;
    const percentageResult = ingredient.reduce(
      (a: any, b: { percentage: any }) => {
        return a + b.percentage;
      },
      0
    );
    const percentageIngredientResult = ingredientPercentage.reduce(
      (a: any, b: { percentage: any }) => {
        return a + b.percentage;
      },
      0
    );
    const totalWeight = (weightTotal * percentageResult) / 100;
    const grams = (totalWeight * percentage) / percentageIngredientResult;
    return grams.toFixed(1);
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
