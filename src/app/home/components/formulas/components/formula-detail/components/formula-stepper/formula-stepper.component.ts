import { Component, OnInit, Input } from '@angular/core';
import {
  Formula,
  IngredientsFormula,
  Mixing,
  MixingOrder,
} from '@core/model/formulas.model';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

@Component({
  selector: 'app-formula-stepper',
  templateUrl: './formula-stepper.component.html',
  styleUrls: ['./formula-stepper.component.sass'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class FormulaStepperComponent implements OnInit {
  costColumn = true;
  @Input() formula: Formula;
  @Input() fontSize: number;
  constructor() {}

  ngOnInit() {
    if (this.formula.mixing) {
      const outputCostArray = [];
      this.formula.mixing.map((element: Mixing) => {
        element.mixing_order.forEach((mixingOrder: MixingOrder) => {
          mixingOrder.ingredients.forEach(
            (ingredientFormula: IngredientsFormula) => {
              if (typeof ingredientFormula.ingredient.cost === 'number') {
                outputCostArray.push(ingredientFormula.ingredient.cost);
              }
            }
          );
        });
      });
      const result = outputCostArray.reduce((a, b) => a + b, 0);
      if (result > 0) {
        this.costColumn = true;
      } else {
        this.costColumn = false;
      }
    }
  }
}
