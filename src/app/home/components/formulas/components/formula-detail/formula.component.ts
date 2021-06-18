import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {
  Formula,
  IngredientsSecondRequest,
  Step,
} from '@core/model/formulas.model';
import { FormulasService } from '@core/service/formulas/formulas.service';
@Component({
  selector: 'app-formula',
  templateUrl: './formula.component.html',
  styleUrls: ['./formula.component.sass'],
})
export class FormulaDetailComponent implements OnInit, AfterViewChecked {
  fontSize = 100;
  toggleButtonGridContainer = true;
  toggleButtonIntro = true;
  toggleButtonImg = true;
  toggleButtonAddInfo = true;
  formula: Formula;
  ingredients: IngredientsSecondRequest[];
  verificationFormula: boolean;
  img: any;
  timeTotal: number;
  ingredientsCompound: IngredientsSecondRequest[];
  formulaId: string;
  percentageTotal: number;
  constructor(
    private route: ActivatedRoute,
    private formulasService: FormulasService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.formulaId = params.id;
      this.fetchFormula(this.formulaId);
      this.fetchFormulaIngredients(this.formulaId);
    });
  }
  ngAfterViewChecked() {
    if (this.ingredients) {
      setTimeout(() => {
        this.ingredientsCompound = this.ingredients.filter(
          (element: IngredientsSecondRequest) =>
            element.ingredient.formula ? element.ingredient.formula : null
        );
      });
    }
  }
  addAllTime() {
    let total = 0;
    const timesArray = this.formula.steps;
    timesArray.forEach((element: Step) => (total += element.time));
  }
  fetchFormula(id: string) {
    this.formulasService.getFormula(id).subscribe((formula: Formula) => {
      this.formula = formula;
    });
  }
  fetchFormulaIngredients(id: string) {
    this.formulasService
      .getFormulaIngredients(id)
      .subscribe((ingredients: IngredientsSecondRequest[]) => {
        this.ingredients = ingredients;
        const result = this.ingredients.reduce(
          (output: any, currentElement: IngredientsSecondRequest) => {
            return output + currentElement.percentage;
          },
          0
        );
        return (this.percentageTotal = result);
      });
  }
  fontSizeChanged(fontSize: number) {
    this.fontSize = fontSize;
  }
  gridContainerChanged(data: boolean) {
    this.toggleButtonGridContainer = data;
  }
  introToggled(toggle: boolean) {
    this.toggleButtonIntro = toggle;
  }
  imgToggled(toggle: boolean) {
    this.toggleButtonImg = toggle;
  }
  addInfoToggled(toggle: boolean) {
    this.toggleButtonAddInfo = toggle;
  }
  noAddInfoToggled(toggle: boolean) {
    this.toggleButtonAddInfo = toggle;
  }
}
