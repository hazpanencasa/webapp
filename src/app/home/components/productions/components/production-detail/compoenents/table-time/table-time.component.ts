import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-table-time",
  templateUrl: "./table-time.component.html",
  styleUrls: ["./table-time.component.sass"],
})
export class TableTimeComponent implements OnInit {
  constructor() {}
  @Input() steps: Array<any>;
  @Input() fontSize: number;
  timeTotal = 0;
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
    this.steps.forEach((element) => (total += element.time));
    return (this.timeTotal = total);
  }
}
