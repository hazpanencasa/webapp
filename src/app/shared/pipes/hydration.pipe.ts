import { Pipe, PipeTransform } from '@angular/core';
import { IngredientsFormula } from '@core/model/formulas.model';

@Pipe({
  name: 'hydration',
})
export class HydrationPipe implements PipeTransform {
  transform(arr: IngredientsFormula[]) {
    const total = arr.map(
      (element: IngredientsFormula) =>
        (+element.ingredient.hydration / 100) * element.percentage
    );
    const hydration = total.reduce((a, b) => a + b, 0).toFixed(0);
    console.log(hydration);
    return hydration;
  }
}
