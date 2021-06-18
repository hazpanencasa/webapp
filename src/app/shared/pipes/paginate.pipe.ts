import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginate',
})
export class PaginatePipe implements PipeTransform {
  transform(
    array: any[],
    pageSize: number | string,
    pageNumber: number
  ): any[] {
    return array.slice(pageNumber * +pageSize, (pageNumber + 1) * +pageSize);
  }
}
