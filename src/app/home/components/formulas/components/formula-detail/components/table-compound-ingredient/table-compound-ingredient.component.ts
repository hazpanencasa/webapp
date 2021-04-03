import { Component, OnInit, Input } from '@angular/core';
import { Formula } from '@core/model/formulas.model';
import { FormulasService } from '@core/service/formulas/formulas.service';

@Component({
  selector: 'app-table-compound-ingredient',
  templateUrl: './table-compound-ingredient.component.html',
  styleUrls: ['./table-compound-ingredient.component.sass'],
})
export class TableCompoundIngredientComponent implements OnInit {
  @Input() formula: Formula;
  @Input() ingredientsCompound: Array<any>;
  @Input() fontSize: number;
  @Input() formulaId: string;
  @Input() totalPercentage: number;
  ingredientsCompoundOutput: Array<any>;
  ingredientsCompoundCollection: Array<any>;
  ingredients: Array<any>;
  formulaCompound: Array<any>;
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
        (step) => step.ingredients
      );
      this.ingredients = ingredientsCompound;
      ingredientsCompound.forEach((ingredient) => {
        ingredient.ingredients.filter(
          (element: { ingredient: { formula: any } }) => {
            if (element.ingredient.formula) {
              result.push(element.ingredient.formula);
            }
            return result;
          }
        );
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
    this.ingredientsCompound.map((ingredient) => {
      this.formulasService
        .getFormulaIngredientsCompound(this.formulaId, ingredient.ingredient.id)
        .subscribe((collection) => {
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
