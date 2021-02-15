import { Component, OnInit, Input } from "@angular/core";
import { Formula } from "@core/model/formulas.model";
@Component({
  selector: "app-table1",
  templateUrl: "./table1.component.html",
  styleUrls: ["./table1.component.sass"],
})
export class Table1Component implements OnInit {
  @Input() fontSize: number;
  @Input() formula: Formula;
  timeTotal = 0;
  constructor() {}

  ngOnInit() {
    this.addAllTime();
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
    return (this.timeTotal = total);
  }
}
