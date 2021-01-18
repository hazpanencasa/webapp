import {Component, OnInit, Input} from "@angular/core";
import {Formula} from "@core/model/formulas.model";
@Component({
  selector: "app-table1",
  templateUrl: "./table1.component.html",
  styleUrls: ["./table1.component.sass"],
})
export class Table1Component implements OnInit {
  @Input() formula: Formula;
  unitWeight: number;
  bakeryMeasure: number;

  constructor() {}

  ngOnInit() {
    this.bakeryFactor();
  }
  bakeryFactor() {
    this.unitWeight = parseInt(this.formula.unit_weight, 10);
    this.bakeryMeasure =
      this.unitWeight / this.formula.ingredients[1].percentage;
    return this.bakeryMeasure;
  }
}
