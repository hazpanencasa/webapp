import { Component, Input, OnInit } from '@angular/core';
import { FormulasService } from '@core/service/formulas/formulas.service';
import { element } from 'protractor';
@Component({
  selector: 'app-formula-compound-stepper',
  templateUrl: './formula-compound-stepper.component.html',
  styleUrls: ['./formula-compound-stepper.component.sass'],
})
export class FormulaCompoundStepperComponent implements OnInit {
  @Input() ingredientsCompound: Array<any>;
  @Input() fontSize: number;
  @Input() formulaId: string;
  ingredientsCompoundOutput: Array<any>;
  ingredientsCompoundCollection: any;
  constructor(private formulasService: FormulasService) {}

  ngOnInit() {
    this.getIngredientsCompoundCollection();
  }
  getIngredientsCompoundCollection() {
    this.ingredientsCompound.map((ingredient) =>
      this.formulasService
        .getFormulaIngredientsCompound(this.formulaId, ingredient.ingredient.id)
        .subscribe((collection) => {
          this.ingredientsCompoundOutput = collection;
          this.ingredientsCompoundCollection = collection.filter((element) => {
            return element.ingredient.formula
              ? element.ingredient.formula
              : null;
          });
        })
    );
  }
}
