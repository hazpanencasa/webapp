import { Component, Input, OnInit } from '@angular/core';
import { Formula, IngredientsFormula } from '@core/model/formulas.model';
import { FormulasService } from '@core/service/formulas/formulas.service';
import { modalFormula } from '@utils/modal';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass'],
})
export class CardComponent implements OnInit {
  @Input() formula: Formula;
  @Input() path: string;
  ingredients$: Observable<IngredientsFormula[]>;
  constructor(private formulaService: FormulasService) {}

  ngOnInit(): void {
    this.ingredients$ = this.formulaService.getFormulaIngredients(this.path);
  }

  onShowModal(img: string) {
    modalFormula(img);
  }
}
