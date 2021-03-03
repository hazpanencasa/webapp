import { Component, Input, OnInit } from '@angular/core';
import { Formula } from '@core/model/formulas.model';
import { IngredientProduction } from '@core/model/ingredient-production';
import { ProductionsService } from '@core/service/productions/productions.service';
@Component({
  selector: 'app-table-ingredients',
  templateUrl: './table-ingredients.component.html',
  styleUrls: ['./table-ingredients.component.sass'],
})
export class TableIngredientsComponent implements OnInit {
  @Input() unitWeight: string;
  @Input() units: string;
  @Input() fontSize: number;
  @Input() id: string;
  @Input() formula: Formula;
  ingredients: IngredientProduction[];
  resultPercent: number;
  constructor(private productionsService: ProductionsService) {}

  ngOnInit() {
    this.fetchIngredientsProduction(this.id, this.formula.id);
  }

  fetchIngredientsProduction(idProduction: string, idFormula: string) {
    this.productionsService
      .getProductionFormulaIngredients(idProduction, idFormula)
      .subscribe((respond) => {
        this.ingredients = respond;
        console.log(respond);
      });
  }
}
