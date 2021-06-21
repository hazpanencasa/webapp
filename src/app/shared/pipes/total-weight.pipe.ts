import { Pipe, PipeTransform } from '@angular/core';
import { Formula } from '@core/model/formulas.model';

@Pipe({
  name: 'totalWeight',
})
export class TotalWeightPipe implements PipeTransform {
  transform(formula: Formula) {
    return +formula.unit_weight * +formula.units;
  }
}
