import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from '@core/model/ingredients.model';

@Component({
  selector: 'app-ingredients-grid',
  templateUrl: './ingredients-grid.component.html',
  styleUrls: ['./ingredients-grid.component.sass'],
})
export class IngredientsGridComponent implements OnInit {
  @Input() ingredient: Ingredient;
  constructor() {}

  ngOnInit() {}
}
