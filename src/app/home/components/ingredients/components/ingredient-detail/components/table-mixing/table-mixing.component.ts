import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-mixing',
  templateUrl: './table-mixing.component.html',
  styleUrls: ['./table-mixing.component.sass'],
})
export class TableMixingComponent implements OnInit {
  costColumn = true;
  @Input() ingredientFormula: any;
  constructor() {}

  ngOnInit() {
    console.log(this.ingredientFormula);
  }
}
