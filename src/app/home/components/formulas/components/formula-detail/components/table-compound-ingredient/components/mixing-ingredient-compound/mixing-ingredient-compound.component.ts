import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {
  Formula,
  IngredientObjectStep,
  IngredientsFormula,
  IngredientStep,
  Step,
} from '@core/model/formulas.model';

@Component({
  selector: 'app-mixing-ingredient-compound',
  templateUrl: './mixing-ingredient-compound.component.html',
  styleUrls: ['./mixing-ingredient-compound.component.sass'],
})
export class MixingIngredientCompoundComponent implements OnInit {
  @Input() formula: Formula;
  @Input() fontSize: number;
  formulaMixing: IngredientObjectStep[] = [];
  isValid: number;

  constructor() {}

  ngOnInit() {
    if (this.formula.steps) {
      const newArray = this.formula.steps.filter((step: Step) => {
        return step.ingredients;
      });
      const ingredientsArrayOuter = newArray.filter((element: Step) => {
        return element.ingredients;
      });
      const ingredientsArrayInner = ingredientsArrayOuter.filter(
        (element: Step) => {
          return element.ingredients;
        }
      );
      console.log('ingredientsArrayInner =>', ingredientsArrayInner);
      ingredientsArrayInner.forEach((element: Step) => {
        element.ingredients.forEach((ingredientStep: IngredientStep) => {
          if (ingredientStep.ingredient.formula) {
            console.log('ingredientStep =>', ingredientStep);
            this.formulaMixing.push(ingredientStep.ingredient);
          }
        });
      });
      const isValid = this.formulaMixing.filter(
        (Ingredient: IngredientObjectStep) => Ingredient.formula.mixing
      );
      this.isValid = isValid.length;
    }
  }
}
