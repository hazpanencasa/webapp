import { Pipe, PipeTransform } from '@angular/core';
import { IngredientsFormula } from '@core/model/formulas.model';

@Pipe({
  name: 'fat',
})
export class FatPipe implements PipeTransform {
  transform(array: any) {
    const fats = array.filter((element: IngredientsFormula) => {
      return +element.ingredient.fat > 0 && !element.ingredient.formula;
    });
    const total = fats.map(
      (element: IngredientsFormula) =>
        (+element.ingredient.fat / 100) * (element.percentage / 100) * 100
    );
    const fat = total.reduce((a, b) => a + b, 0).toFixed(1);
    return fat;
  }
}
