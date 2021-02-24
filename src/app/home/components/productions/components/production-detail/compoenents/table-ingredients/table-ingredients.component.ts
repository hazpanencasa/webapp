import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-table-ingredients",
  templateUrl: "./table-ingredients.component.html",
  styleUrls: ["./table-ingredients.component.sass"],
})
export class TableIngredientsComponent implements OnInit {
  @Input() ingredients: Array<any>;
  @Input() unitWeight: string;
  @Input() units: string;
  @Input() fontSize: number;
  resultPercent: number;
  constructor() {}

  ngOnInit() {
    const percentageArray = this.ingredients.reduce(
      (outputArray, currentArray) => outputArray + currentArray.percentage,
      0
    );
    this.resultPercent = percentageArray;
  }
  transformStringToNumber(s: string, r?: number) {
    return parseInt(s, r);
  }
}
