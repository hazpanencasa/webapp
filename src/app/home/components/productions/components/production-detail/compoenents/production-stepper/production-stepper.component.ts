import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-production-stepper",
  templateUrl: "./production-stepper.component.html",
  styleUrls: ["./production-stepper.component.sass"],
})
export class ProductionStepperComponent implements OnInit {
  costColumn = true;
  @Input() mixing: Array<any>;
  @Input() fontSize: number;
  constructor() {}

  ngOnInit() {
    let outputCostArray = [];
    const mixingOrderArray = this.mixing[0].mixing_order;
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
  }
}
