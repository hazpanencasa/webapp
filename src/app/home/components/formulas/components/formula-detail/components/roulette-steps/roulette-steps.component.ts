import { Component, Input, OnInit } from "@angular/core";
import { Formula } from "@core/model/formulas.model";

@Component({
  selector: "app-roulette-steps",
  templateUrl: "./roulette-steps.component.html",
  styleUrls: ["./roulette-steps.component.sass"],
})
export class RouletteStepsComponent implements OnInit {
  @Input() fontSize: number;
  @Input() formula: Formula;
  numberIterator = [];
  autoTicks = false;
  max = 12;
  min = 1;
  showTicks = true;
  step = 1;
  thumbLabel = true;
  value = 1;
  tickInterval = 1;
  images = [];
  arraySteps = [];
  Object: object = {};

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
