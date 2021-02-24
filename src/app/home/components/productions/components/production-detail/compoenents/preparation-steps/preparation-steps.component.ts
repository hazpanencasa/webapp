import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-preparation-steps",
  templateUrl: "./preparation-steps.component.html",
  styleUrls: ["./preparation-steps.component.sass"],
})
export class PreparationStepsComponent implements OnInit {
  @Input() steps: Array<any>;
  @Input() fontSize: number;
  @Input() toggleButtonGridContainer: boolean;
  constructor() {}

  ngOnInit() {}
  celsiusToFahrenheit(celsius: number) {
    return Math.ceil((celsius * 9) / 5 + 32);
  }
  transformMinutesToHours(minutes: number) {
    const hour = 60;
    const minutesToHours: number = Math.floor((minutes * 1) / hour);
    const justMinutes = Math.floor(
      ((minutes * 1) / hour - minutesToHours) * hour
    );
    if (minutes > hour && justMinutes !== 0) {
      return `${minutesToHours} h. ${justMinutes} min`;
    } else if (minutes >= hour && justMinutes === 0) {
      return `${minutesToHours} h`;
    } else {
      return `${minutes} min`;
    }
  }
}
