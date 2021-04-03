import { Component, OnInit, Input } from '@angular/core';
import { Formula } from '@core/model/formulas.model';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { element } from 'protractor';

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
      this.formula.mixing.map((element) => {
        element.mixing_order.forEach((element) => {
          element.ingredients.forEach((element) => {
            if (typeof element.ingredient.cost === 'number') {
              outputCostArray.push(element.ingredient.cost);
            }
          });
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
