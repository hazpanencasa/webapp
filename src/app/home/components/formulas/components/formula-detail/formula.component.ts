import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Formula } from '@core/model/formulas.model';
import { IngredientsFormula } from '@core/model/ingredients-formula';
import { FormulasService } from '@core/service/formulas/formulas.service';
import { Html2canvasService } from '@core/service/html2canvas.service';
@Component({
  selector: 'app-formula',
  templateUrl: './formula.component.html',
  styleUrls: ['./formula.component.sass'],
  providers: [Html2canvasService],
})
export class FormulaDetailComponent implements OnInit {
  toggleButtonGridContainer = true;
  toggleButtonIntro = true;
  toggleButtonImg = true;
  toggleButtonAddInfo = true;
  fontSize = 100;
  formula: Formula;
  ingredients: IngredientsFormula[];
  verificationFormula: boolean;
  img: any;
  timeTotal: number;
  constructor(
    private route: ActivatedRoute,
    private formulasService: FormulasService
  ) {}

  ngOnInit() {
    this.idParams();
  }
  addAllTime() {
    let total = 0;
    const timesArray = this.formula.steps;
    timesArray.forEach((element) => (total += element.time));
    console.log(timesArray);
  }
  idParams() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchFormula(id);
      this.fetchFormulaIngredients(id);
    });
  }
  fetchFormula(id: string) {
    this.formulasService.getFormula(id).subscribe((formula) => {
      this.formula = formula;
    });
  }
  fetchFormulaIngredients(id: string) {
    this.formulasService.getFormulaIngredients(id).subscribe((ingredients) => {
      this.ingredients = ingredients;
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
