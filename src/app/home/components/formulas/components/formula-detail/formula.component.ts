import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {
  Formula,
  Ingredient,
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
  toggleButtonGridContainer = true;
  toggleButtonIntro = true;
  toggleButtonImg = true;
  toggleButtonAddInfo = true;
  fontSize = 100;
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
    // tslint:disable-next-line: deprecation
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
    // tslint:disable-next-line: deprecation
    this.formulasService.getFormula(id).subscribe((formula: Formula) => {
      this.formula = formula;
    });
  }
  fetchFormulaIngredients(id: string) {
    this.formulasService
      .getFormulaIngredients(id)
      // tslint:disable-next-line: deprecation
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
  increaseFont() {
    this.fontSize += 10;
  }
  decreaseFont() {
    this.fontSize -= 10;
  }
  changeGridColumnByTwo() {
    if (!this.toggleButtonGridContainer) {
      this.toggleButtonGridContainer = true;
    }
  }
  changeGridColumnByOne() {
    if (this.toggleButtonGridContainer) {
      this.toggleButtonGridContainer = false;
    }
  }
  toggleButtonWithIntro() {
    if (!this.toggleButtonIntro) {
      this.toggleButtonIntro = true;
    }
  }
  toggleButtonWithNoIntro() {
    if (this.toggleButtonIntro) {
      this.toggleButtonIntro = false;
    }
  }
  toggleButtonWithImg() {
    if (!this.toggleButtonImg) {
      this.toggleButtonImg = true;
    }
  }
  toggleButtonWithNoImg() {
    if (this.toggleButtonImg) {
      this.toggleButtonImg = false;
    }
  }
  toggleButtonWithAddInfo() {
    if (!this.toggleButtonAddInfo) {
      this.toggleButtonAddInfo = true;
    }
  }
  toggleButtonWithNoAddInfo() {
    if (this.toggleButtonAddInfo) {
      this.toggleButtonAddInfo = false;
    }
  }
  printPDF() {
    window.print();
  }
}
