import { FocusMonitor } from '@angular/cdk/a11y';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(array: any, search: any): any {
    if (array) {
      if (search.length === 0 || search.length < 3) {
        return array;
      } else {
        const filteredArray = array.filter((element: any) =>
          (element.payload.doc.data().name as string)
            .toLocaleLowerCase()
            .includes(search.toLocaleLowerCase())
        );

        return filteredArray;
      }
    }
  }
}
