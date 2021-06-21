import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {
  Formula,
  IngredientsSecondRequest,
  Step,
} from '@core/model/formulas.model';

@Component({
  selector: 'app-table-intro',
  templateUrl: './table-intro.component.html',
  styleUrls: ['./table-intro.component.sass'],
})
export class TableIntroComponent implements OnInit {
  @Input() formula: Formula;
  @Input() ingredients: IngredientsSecondRequest[];
  @Input() fontSize: number;
  constructor() {}

  ngOnInit() {}
}
