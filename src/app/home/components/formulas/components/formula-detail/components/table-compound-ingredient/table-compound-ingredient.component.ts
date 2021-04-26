import { Component, OnInit, Input } from '@angular/core';
import {
  Formula,
  FormulaStep,
  IngredientsFormula,
  IngredientsSecondRequest,
  IngredientStep,
  Step,
} from '@core/model/formulas.model';
import { FormulasService } from '@core/service/formulas/formulas.service';

@Component({
  selector: 'app-table-compound-ingredient',
  templateUrl: './table-compound-ingredient.component.html',
  styleUrls: ['./table-compound-ingredient.component.sass'],
})
export class TableCompoundIngredientComponent implements OnInit {
  @Input() formula: Formula;
  @Input() ingredientsCompound: IngredientsSecondRequest[];
  @Input() fontSize: number;
  @Input() formulaId: string;
  @Input() totalPercentage: number;
  ingredientsCompoundOutput: IngredientsFormula[];
  ingredientsCompoundCollection: IngredientsFormula[];
  steps: Step[];
  formulaCompound: FormulaStep[];
  resultPercentage = 0;
  totalGrams = 0;
  grams = 0;
  weightTotal: number;
  constructor(private formulasService: FormulasService) {}

  ngOnInit() {
    this.getFormulaCompound();
    this.getIngredientsCompoundCollection();
    const weight = parseInt(this.formula.unit_weight, 10);
    const unit = parseInt(this.formula.units, 10);
    this.weightTotal = weight * unit;
  }
  getFormulaCompound() {
    if (this.formula.steps) {
      const result = [];
      const ingredientsCompound = this.formula.steps.filter(
        (step: Step) => step.ingredients
      );
      this.steps = ingredientsCompound;
      // console.log(ingredientsCompound);
      ingredientsCompound.forEach((step: Step) => {
        step.ingredients.filter((element: IngredientStep) => {
          if (element.ingredient.formula) {
            result.push(element.ingredient.formula);
          }
          return result;
        });
      });
      this.formulaCompound = result;
    }
  }
  getTotalPercentage(ingredient: any) {
    ingredient.reduce((a: any, b: { percentage: any }) => {
      this.resultPercentage = a + b.percentage;
    }, 0);
    return this.resultPercentage.toFixed(1);
  }
  getTotalGrams(ingredient: any) {
    const percentageResult = ingredient.reduce(
      (a: any, b: { percentage: any }) => {
        return a + b.percentage;
      },
      0
    );
    this.totalGrams = (this.weightTotal * percentageResult) / 100;
    return this.totalGrams.toFixed(1);
  }
  getIngredientsGrams(percentage: number) {
    this.grams = (this.weightTotal * percentage) / 100;
    return this.grams.toFixed(1);
  }
  validation(ingredient: any) {
    let result = true;
    ingredient.forEach((element: { ingredient: { formula: any } }) => {
      if (element.ingredient.formula) {
        result = true;
      } else {
        result = false;
      }
    });
    return result;
  }
  getIngredientsCompoundCollection() {
    this.ingredientsCompound.map((ingredient: IngredientsSecondRequest) => {
      this.formulasService
        .getFormulaIngredientsCompound(this.formulaId, ingredient.ingredient.id)
        // tslint:disable-next-line: deprecation
        .subscribe((collection: IngredientsFormula[]) => {
          this.ingredientsCompoundOutput = collection;
          this.ingredientsCompoundCollection = collection.filter((element) => {
            return element.ingredient.formula
              ? element.ingredient.formula
              : null;
          });
        });
    });
  }
}
