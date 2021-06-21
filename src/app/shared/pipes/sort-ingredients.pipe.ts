import { Pipe, PipeTransform } from '@angular/core';
import { IngredientsSecondRequest } from '@core/model/formulas.model';

@Pipe({
  name: 'sortIngredients',
})
export class SortIngredientsPipe implements PipeTransform {
  transform(arrayIngredients: IngredientsSecondRequest[]) {
    return arrayIngredients.sort((a, b) => b.percentage - a.percentage);
  }
}
