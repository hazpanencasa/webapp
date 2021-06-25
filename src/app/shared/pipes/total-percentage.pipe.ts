import { Pipe, PipeTransform } from '@angular/core';
import { IngredientsSecondRequest } from '@core/model/formulas.model';

@Pipe({
  name: 'totalPercentage',
})
export class TotalPercentagePipe implements PipeTransform {
  transform(ingredients: any[]) {
    const result = ingredients.reduce(
      (output: any, currentElement: IngredientsSecondRequest) => {
        return output + currentElement.percentage;
      },
      0
    );
    return result;
  }
}
