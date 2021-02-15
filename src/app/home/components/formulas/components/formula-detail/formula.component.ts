import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Formula } from "@core/model/formulas.model";
import { FormulasService } from "@core/service/formulas/formulas.service";
import html2canvas from "html2canvas";
import { Html2canvasService } from "@core/service/html2canvas.service";
import * as printJS from "print-js";
import domtoimage from "dom-to-image";
@Component({
  selector: "app-formula",
  templateUrl: "./formula.component.html",
  styleUrls: ["./formula.component.sass"],
  providers: [Html2canvasService],
})
export class FormulaDetailComponent implements OnInit {
  toggleButtonGridContainer = true;
  toggleButtonIntro = true;
  toggleButtonImg = true;
  toggleButtonAddInfo = true;
  fontSize = 100;
  formula: Formula;
  verificationFormula: boolean;
  img: any;
  constructor(
    private route: ActivatedRoute,
    private formulasService: FormulasService,
    // tslint:disable-next-line: no-shadowed-variable
    private html2canvas: Html2canvasService
  ) {}

  ngOnInit() {
    this.idParams();
  }
  idParams() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchFormula(id);
    });
  }
  fetchFormula(id: string) {
    this.formulasService.getFormula(id).subscribe((formula) => {
      this.formula = formula;
    });
  }
  increaseFont() {
    this.fontSize += 5;
  }
  decreaseFont() {
    this.fontSize -= 5;
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
