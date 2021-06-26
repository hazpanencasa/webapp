import { Pipe, PipeTransform } from '@angular/core';
import { IngredientsFormula } from '@core/model/formulas.model';

@Pipe({
  name: 'hydration',
})
export class HydrationPipe implements PipeTransform {
  transform(arr: IngredientsFormula[]) {
    const hydrations = arr.filter((element: IngredientsFormula) => {
      return +element.ingredient.hydration > 0 && !element.ingredient.formula;
    });
    const total = hydrations.map(
      (element: IngredientsFormula) =>
        (+element.ingredient.hydration / 100) * (element.percentage / 100) * 100
    );
    const hydration = total.reduce((a, b) => a + b, 0).toFixed(1);
    return hydration;
  }
}
