import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-production-stepper-compound",
  templateUrl: "./production-stepper-compound.component.html",
  styleUrls: ["./production-stepper-compound.component.sass"],
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
      let outputCostArray = [];
      this.mixing.forEach((element) => {
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
}
