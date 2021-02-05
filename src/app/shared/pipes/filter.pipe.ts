import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter",
})
export class FilterPipe implements PipeTransform {
  transform(value: any, args: any): any {
    if (args === "" || args.length < 3) {
      return value;
    }
    const resultArray = [];
    for (const i of value) {
      if (i.name.toLowerCase().indexOf(args.toLowerCase()) > -1) {
        resultArray.push(i);
      }
    }
    return resultArray;
  }
}
