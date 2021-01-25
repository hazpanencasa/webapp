import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: "filter",
})
export class FilterPipe implements PipeTransform {
  transform(value: any, args: any): any {
    const resultFormulas = [];
    if (args.length < 3) {
      return value;
    }
    for (const formula of value) {
      if (formula.name.toLowerCase().indexOf(args.toLowerCase()) > -1) {
        resultFormulas.push(formula);
      }
    }
    return resultFormulas;
  }
}
