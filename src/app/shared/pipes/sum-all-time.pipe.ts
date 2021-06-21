import { Pipe, PipeTransform } from '@angular/core';
import { Step } from '@core/model/formulas.model';

@Pipe({
  name: 'sumAllTime',
})
export class SumAllTimePipe implements PipeTransform {
  transform(steps: Step[]): number {
    if (steps) {
      return steps.reduce((output, currentElement: Step) => {
        return output + currentElement.time;
      }, 0);
    }
  }
}
