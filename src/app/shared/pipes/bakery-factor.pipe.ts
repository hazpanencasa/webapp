import { Pipe, PipeTransform } from '@angular/core';
import { IngredientsSecondRequest } from '@core/model/formulas.model';

@Pipe({
  name: 'bakeryFactor',
})
export class BakeryFactorPipe implements PipeTransform {
  transform(
    ingredients: IngredientsSecondRequest[],
    unitWeight: string
  ): string {
    const result = ingredients.reduce(
      (output: any, currentElement: IngredientsSecondRequest) => {
        return output + currentElement.percentage;
      },
      0
    );
    return (+unitWeight / result).toFixed(1);
  }
}
