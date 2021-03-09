import {
  Component,
  Input,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { Formula } from '@core/model/formulas.model';
import { IngredientProduction } from '@core/model/ingredient-production';
import { ProductionsService } from '@core/service/productions/productions.service';

import { TbodyComponent } from './components/tbody/tbody.component';
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
  resultPercentage: number;
  constructor(private productionsService: ProductionsService) {}
  ngOnInit() {
    this.fetchIngredientsProduction(this.id, this.formula.id);
  }
  fetchIngredientsProduction(idProduction: string, idFormula: string) {
    this.productionsService
      .getProductionFormulaIngredients(idProduction, idFormula)
      // tslint:disable-next-line: deprecation
      .subscribe((respond) => {
        this.ingredients = respond;
      });
  }
}
