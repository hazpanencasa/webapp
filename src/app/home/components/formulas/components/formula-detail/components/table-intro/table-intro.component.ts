import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Formula } from '@core/model/formulas.model';
import { IngredientsFormula } from '@core/model/ingredients-formula';

@Component({
  selector: 'app-table-intro',
  templateUrl: './table-intro.component.html',
  styleUrls: ['./table-intro.component.sass'],
})
export class TableIntroComponent implements OnInit {
  @Input() formula: Formula;
  @Input() ingredients: any;
  @Input() fontSize: number;
  timeTotal: number;
  preTime: number;
  bakeTime: any;
  unitWeight: number;
  bakeryMeasure: number;
  weightTotal: number;
  constructor() {}

  ngOnInit() {
    this.addAllTime();
    this.bakeryFactor();
    // console.table(this.formula);
    this.weightTotal =
      parseInt(this.formula.unit_weight, 10) * parseInt(this.formula.units, 10);
  }
  transformMinutesToHours(minutes: any) {
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
    const result = this.formula.steps.reduce((output, currentElement) => {
      return output + currentElement.time;
    }, 0);
    this.timeTotal = result;
  }
  bakeryFactor() {
    const result = this.ingredients.reduce((a, b) => {
      return a + b.percentage;
    }, 0);
    console.log(result);
    // const weightTotal =
    //   parseInt(this.formula.unit_weight, 10) * parseInt(this.formula.units, 10);
    this.bakeryMeasure = parseInt(this.formula.unit_weight, 10) / result;
  }
}
