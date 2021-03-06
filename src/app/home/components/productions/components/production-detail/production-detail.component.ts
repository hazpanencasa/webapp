import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormulaProduction } from '@core/model/formula-production';
import { Production } from '@core/model/productions.model';
import { ProductionsService } from '@core/service/productions/productions.service';

@Component({
  selector: 'app-production-detail',
  templateUrl: './production-detail.component.html',
  styleUrls: ['./production-detail.component.sass'],
})
export class ProductionDetailComponent implements OnInit {
  arrayPercent = [];
  resultPercent = 0;
  resultGrams = 0;
  toggleButtonGridContainer = true;
  toggleButtonIntro = true;
  toggleButtonImg = true;
  toggleButtonAddInfo = true;
  fontSize = 100;
  verificationFormula: boolean;
  img: any;
  timeTotal: number;
  production: any;
  formulas: FormulaProduction[];
  id: any;
  constructor(
    private productionsService: ProductionsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduction(id);
      this.fetchFormulaProduction(id);
    });
  }
  fetchProduction(id: string) {
    this.productionsService.getProduction(id).subscribe((production) => {
      this.production = production;
    });
  }
  fetchFormulaProduction(id: string) {
    this.productionsService.getFormulaProductions(id).subscribe((formulas) => {
      this.formulas = formulas;
    });
  }
  printPdf() {
    window.print();
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
}
