import { Component, Input, OnInit } from '@angular/core';
import { Formula } from '@core/model/formulas.model';
import { IngredientProduction } from '@core/model/ingredient-production';
import { ProductionsService } from '@core/service/productions/productions.service';

@Component({
  selector: 'app-table-intro',
  templateUrl: './table-intro.component.html',
  styleUrls: ['./table-intro.component.sass'],
})
export class TableIntroComponent implements OnInit {
  @Input() formula: Formula;
  @Input() id: string;
  @Input() unitWeight: string;
  @Input() units: string;
  @Input() fontSize: number;
  timeTotal: number;
  bakeryMeasure: number;
  ingredients: IngredientProduction[];
  constructor(private productionsService: ProductionsService) {}

  ngOnInit() {
    this.addAllTime();
    // this.fetchIngredients(this.id, this.formula.id);
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
    const times = this.formula.steps.reduce((output, currentElement) => {
      return currentElement.time + output;
    }, 0);
    this.timeTotal = times;
  }
  // fetchIngredients(id1: string, id2: string) {
  //   this.productionsService
  //     .getProductionFormulaIngredients(id1, id2)
  //     .subscribe((ingredients) => {
  //       this.ingredients = ingredients;
  //     });
  // }
}
