import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-production-stepper',
  templateUrl: './production-stepper.component.html',
  styleUrls: ['./production-stepper.component.sass'],
})
export class ProductionStepperComponent implements OnInit {
  @Input() compoundValidation: boolean;
  costColumn = true;
  @Input() toggleButtonGridContainer: boolean;
  @Input() mixing: Array<any>;
  @Input() fontSize: number;
  constructor() {}

  ngOnInit() {
    const outputCostArray = [];
    const mixingOrderArray = this.mixing[0].mixing_order;
    mixingOrderArray.forEach((element) => {
      const newArray = element.ingredients;
      // tslint:disable-next-line: no-shadowed-variable
      newArray.forEach((element: any) => {
        const outArray = element.ingredient.cost;
        outputCostArray.push(outArray);
      });
    });
    const result = outputCostArray.reduce((a, b) => a + b, 0);
    if (result > 0) {
      // tslint:disable-next-line: no-unused-expression
      this.costColumn;
    } else {
      this.costColumn = false;
    }
  }
}
