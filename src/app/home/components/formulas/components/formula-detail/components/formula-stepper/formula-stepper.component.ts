import { Component, OnInit, Input } from "@angular/core";
import { Formula } from "@core/model/formulas.model";
import { STEPPER_GLOBAL_OPTIONS } from "@angular/cdk/stepper";

@Component({
  selector: "app-formula-stepper",
  templateUrl: "./formula-stepper.component.html",
  styleUrls: ["./formula-stepper.component.sass"],
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
    let outputCostArray = [];
    const mixingOrderArray = this.formula.mixing[0].mixing_order;
    mixingOrderArray.forEach((element) => {
      let newArray = element.ingredients;
      newArray.forEach((element) => {
        let outArray = element.ingredient.cost;
        outputCostArray.push(outArray);
      });
    });
    const result = outputCostArray.reduce((a, b) => a + b, 0);
    if (result > 0) {
      this.costColumn;
    } else {
      this.costColumn = false;
    }
    console.log(this.costColumn);
  }
}
