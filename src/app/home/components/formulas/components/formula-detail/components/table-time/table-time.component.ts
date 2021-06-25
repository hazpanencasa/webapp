import { Component, OnInit, Input } from '@angular/core';
import { Formula, Step } from '@core/model/formulas.model';
@Component({
  selector: 'app-table-time',
  templateUrl: './table-time.component.html',
  styleUrls: ['./table-time.component.sass'],
})
export class TableTimeComponent implements OnInit {
  @Input() fontSize: number;
  @Input() formula: Formula;
  timeTotal = 0;
  constructor() {}

  ngOnInit() {
    console.log(this.formula);
    // this.addAllTime();
  }
  // transformMinutesToHours(minutes: number) {
  //   const hour = 60;
  //   const minutesToHours: number = Math.floor((minutes * 1) / hour);
  //   const justMinutes = Math.floor(
  //     ((minutes * 1) / hour - minutesToHours) * hour
  //   );
  //   if (minutes > hour && justMinutes !== 0) {
  //     return `${minutesToHours} h. ${justMinutes} min.`;
  //   } else if (minutes >= hour && justMinutes === 0) {
  //     return `${minutesToHours} h.`;
  //   } else {
  //     return `${minutes} min.`;
  //   }
  // }
  // addAllTime() {
  //   if (this.formula.steps) {
  //     let total = 0;
  //     const TimesArray = this.formula.steps;
  //     TimesArray.forEach((element: Step) => (total += element.time));
  //     return (this.timeTotal = total);
  //   }
  // }
}
