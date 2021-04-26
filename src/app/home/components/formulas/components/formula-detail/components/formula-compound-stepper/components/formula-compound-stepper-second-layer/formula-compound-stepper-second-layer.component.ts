import { Component, Input, OnInit } from '@angular/core';
import {
  IngredientsFormula,
  IngredientStep,
  MixingOrder,
} from '@core/model/formulas.model';

@Component({
  selector: 'app-formula-compound-stepper-second-layer',
  templateUrl: './formula-compound-stepper-second-layer.component.html',
  styleUrls: ['./formula-compound-stepper-second-layer.component.sass'],
})
export class FormulaCompoundStepperSecondLayerComponent implements OnInit {
  costColumn = true;
  @Input() idIngredientsCompound: string;
  @Input() idFormula: string;
  @Input() ingredientsCompoundOutput: IngredientsFormula[];
  @Input() fontSize: number;
  constructor() {}

  ngOnInit(): void {
    this.ingredientsCompoundOutput
      .map(
        (ingredient: IngredientsFormula) => ingredient.ingredient.formula.mixing
      )
      .map(
        (mixing) => {}
        // console.log('mixing =>', mixing)
      );
  }
}
