import { Component, Input, OnInit } from '@angular/core';
import { IngredientsSecondRequest } from '@core/model/formulas.model';
import { FormulasService } from '@core/service/formulas/formulas.service';
@Component({
  selector: 'app-formula-compound-stepper',
  templateUrl: './formula-compound-stepper.component.html',
  styleUrls: ['./formula-compound-stepper.component.sass'],
})
export class FormulaCompoundStepperComponent implements OnInit {
  costColumn = true;
  @Input() ingredientsCompound: IngredientsSecondRequest[];
  @Input() fontSize: number;
  @Input() formulaId: string;
  ingredientsCompoundOutput: IngredientsSecondRequest[];
  ingredientsCompoundCollection: IngredientsSecondRequest[];
  constructor(private formulasService: FormulasService) {}

  ngOnInit() {
    this.getIngredientsCompoundCollection();
  }
  getIngredientsCompoundCollection() {
    this.ingredientsCompound.map((ingredient: IngredientsSecondRequest) =>
      this.formulasService
        .getFormulaIngredientsCompound(this.formulaId, ingredient.ingredient.id)
        // tslint:disable-next-line: deprecation
        .subscribe((collection: IngredientsSecondRequest[]) => {
          // this.ingredientsCompoundOutput = collection;
          this.ingredientsCompoundCollection = collection.filter(
            (element: IngredientsSecondRequest) => {
              return element.ingredient.formula
                ? element.ingredient.formula
                : null;
            }
          );
        })
    );
  }
}
