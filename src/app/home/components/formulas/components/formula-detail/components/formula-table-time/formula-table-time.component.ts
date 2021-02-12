import { Input } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { Formula } from "@core/model/formulas.model";

@Component({
  selector: "app-formula-table-time",
  templateUrl: "./formula-table-time.component.html",
  styleUrls: ["./formula-table-time.component.sass"],
})
export class FormulaTableTimeComponent implements OnInit {
  @Input() formula: Formula;
  timeTotal = 0;
  preTime: number;
  bakeTime: any;
  unitWeight: number;
  bakeryMeasure: number;
  constructor() {}

  ngOnInit() {
    this.addAllTime();
    this.bakeryFactor();
  }
  transformMinutesToHours(minutes: number) {
    const hour = 60;
    const minutesToHours: number = Math.floor((minutes * 1) / hour);
    const justMinutes = Math.floor(
      ((minutes * 1) / hour - minutesToHours) * hour
    );
    if (minutes > hour && justMinutes !== 0) {
      return `${minutesToHours} h. ${justMinutes} min.`;
    } else if (minutes >= hour && justMinutes === 0) {
      return `${minutesToHours} h.`;
    } else {
      return `${minutes} min.`;
    }
  }
  addAllTime() {
    let total = 0;
    const TimesArray = this.formula.steps;
    const preparation = this.formula.steps[0].time;
    const bake = this.formula.steps[10].time;
    this.preTime = preparation;
    this.bakeTime = bake;
    TimesArray.forEach((element) => (total += element.time));
    this.timeTotal = total;
  }
  bakeryFactor() {
    this.unitWeight = parseInt(this.formula.unit_weight, 10);
    this.bakeryMeasure =
      this.unitWeight / this.formula.ingredients[1].percentage;
    return this.bakeryMeasure;
  }
}
