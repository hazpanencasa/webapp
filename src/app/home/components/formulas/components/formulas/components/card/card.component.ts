import { Component, Input, OnInit } from '@angular/core';
import { Formula, IngredientsFormula } from '@core/model/formulas.model';
import { FormulasService } from '@core/service/formulas/formulas.service';
import { modalFormula } from '@utils/modal';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass'],
})
export class CardComponent implements OnInit {
  @Input() formula: Formula;
  ingredients: IngredientsFormula[] = [];
  constructor(private formulaService: FormulasService) {}

  ngOnInit(): void {
    this.formulaService
      .getFormulaIngredients(this.formula.id)
      .subscribe((data: IngredientsFormula[]) => {
        if (this.ingredients.length === 0) {
          this.ingredients = data;
        }
      });
  }

  onShowModal(img: string) {
    modalFormula(img);
  }
}
