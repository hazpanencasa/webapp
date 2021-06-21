import { Pipe, PipeTransform } from '@angular/core';
import { Formula } from '@core/model/formulas.model';

@Pipe({
  name: 'getGrams',
})
export class GetGramsPipe implements PipeTransform {
  transform(percentage: number, totalPercentage: number, formula: Formula) {
    const totalWeight = +formula.unit_weight * +formula.units;
    const result = (percentage * totalWeight) / totalPercentage;
    return result.toFixed(1);
  }
}
