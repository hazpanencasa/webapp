import { Component, Input, OnInit } from '@angular/core';
import { Formula, IngredientsFormula } from '@core/model/formulas.model';
import { modalFormula } from '@utils/modal';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass'],
})
export class CardComponent implements OnInit {
  @Input() formula: Formula;
  ingredients: IngredientsFormula[];
  constructor() {}

  ngOnInit(): void {
    // console.log(this.formula);
  }

  onShowModal(img: string) {
    modalFormula(img);
  }
}
