import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {
  Formula,
  IngredientsSecondRequest,
  Step,
} from '@core/model/formulas.model';
import { FormulasService } from '@core/service/formulas/formulas.service';

@Component({
  selector: 'app-table-intro',
  templateUrl: './table-intro.component.html',
  styleUrls: ['./table-intro.component.sass'],
})
export class TableIntroComponent implements OnInit {
  @Input() formula: Formula;
  @Input() ingredients: IngredientsSecondRequest[];
  @Input() fontSize: number;
  timeTotal: number;
  preTime: number;
  bakeTime: any;
  unitWeight: number;
  bakeryMeasure: number;
  weightTotal: number;
  hydration: string;
  constructor(private formulaService: FormulasService) {}

  ngOnInit() {
    this.addAllTime();
    this.bakeryFactor();
    this.weightTotal = +this.formula.unit_weight * +this.formula.units;
    const result = this.ingredients.filter(
      (element: IngredientsSecondRequest) => {
        if (typeof element.ingredient.hydration === 'string') {
          return +element.ingredient.hydration;
        } else {
          return element.ingredient.hydration;
        }
      }
    );
    const total = result.map((element: IngredientsSecondRequest) => {
      return (+element.ingredient.hydration / 100) * element.percentage;
    });

    const hydration = total.reduce((a, b) => a + b, 0);
    this.hydration = hydration.toFixed(1);
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
    if (this.formula.steps) {
      const result = this.formula.steps.reduce(
        (output, currentElement: Step) => {
          return output + currentElement.time;
        },
        0
      );
      this.timeTotal = result;
    } else {
      this.timeTotal = 0;
    }
  }
  bakeryFactor() {
    const result = this.ingredients.reduce(
      (output: any, currentElement: IngredientsSecondRequest) => {
        return output + currentElement.percentage;
      },
      0
    );
    this.bakeryMeasure = parseInt(this.formula.unit_weight, 10) / result;
  }
}
