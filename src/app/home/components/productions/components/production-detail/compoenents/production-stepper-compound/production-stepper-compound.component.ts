import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-production-stepper-compound',
  templateUrl: './production-stepper-compound.component.html',
  styleUrls: ['./production-stepper-compound.component.sass'],
})
export class ProductionStepperCompoundComponent implements OnInit {
  costColumn = true;
  @Input() fontSize: number;
  @Input() mixing: Array<any>;
  @Input() name: string;
  constructor() {}

  ngOnInit() {
    this.costColumnValidation();
  }
  costColumnValidation() {
    if (this.mixing) {
      const outputCostArray = [];
      this.mixing.forEach((element) => {
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
}
