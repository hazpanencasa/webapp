import { Component, Input, OnInit } from "@angular/core";
import { Formula } from "@core/model/formulas.model";

@Component({
  selector: "app-table-intro",
  templateUrl: "./table-intro.component.html",
  styleUrls: ["./table-intro.component.sass"],
})
export class TableIntroComponent implements OnInit {
  @Input() formula: Formula;
  @Input() unitWeight: string;
  @Input() units: string;
  @Input() fontSize: number;
  timeTotal = 0;
  bakeryMeasure: number;
  constructor() {}

  ngOnInit() {
    this.addAllTime();
    this.bakeryFactor();
  }
  transformStringToNumber(s: string, r?: number) {
    return parseInt(s, r);
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
    TimesArray.forEach((element) => (total += element.time));
    this.timeTotal = total;
  }
  bakeryFactor() {
    const percentageArray = [];
    this.formula.ingredients.forEach((element) =>
      percentageArray.push(element.percentage)
    );
    const result = percentageArray.reduce((a, b) => a + b, 0);
    this.bakeryMeasure = parseInt(this.unitWeight, 10) / result;
  }
}
