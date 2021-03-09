import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-ingredients',
  templateUrl: './table-ingredients.component.html',
  styleUrls: ['./table-ingredients.component.sass'],
})
export class TableIngredientsComponent implements OnInit {
  @Input() ingredientCompound: Array<any>;
  @Input() ingredient: any;
  resultPercent: any;
  constructor() {}

  ngOnInit() {
    const result = this.ingredientCompound.reduce((a, b) => {
      return a + b.percentage;
    }, 0);
    this.resultPercent = result;
  }
}
