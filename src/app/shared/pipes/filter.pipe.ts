import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(array: any, search: any): any {
    if (search === '' || search.length < 3) {
      return array;
    }
    const filteredArray = array.filter((element: any) =>
      (element.name as string)
        .toLocaleLowerCase()
        .includes(search.toLocaleLowerCase())
    );
    return filteredArray;
  }
}
