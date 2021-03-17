import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Formula } from '@core/model/formulas.model';

@Component({
  selector: 'app-mixing-ingredient-compound',
  templateUrl: './mixing-ingredient-compound.component.html',
  styleUrls: ['./mixing-ingredient-compound.component.sass'],
})
export class MixingIngredientCompoundComponent implements OnInit {
  @Input() formula: Formula;
  formulaMixing = [];
  isValid: number;

  constructor() {}

  ngOnInit() {
    const newArray = this.formula.steps.filter((step) => {
      return step.ingredients;
    });
    const ingredientsArrayOuter = newArray.filter((element) => {
      return element.ingredients;
    });
    const ingredientsArrayInner = ingredientsArrayOuter.filter((element) => {
      return element.ingredients;
    });
    ingredientsArrayInner.forEach((element) => {
      element.ingredients.forEach((element) => {
        if (element.ingredient.formula) {
          this.formulaMixing.push(element.ingredient);
        }
      });
    });
    const isValid = this.formulaMixing.filter((i) => i.formula.mixing);
    this.isValid = isValid.length;
  }
}
