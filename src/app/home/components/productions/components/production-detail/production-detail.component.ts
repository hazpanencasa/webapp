import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Production } from "@core/model/productions.model";
import { ProductionsService } from "@core/service/productions/productions.service";

@Component({
  selector: "app-production-detail",
  templateUrl: "./production-detail.component.html",
  styleUrls: ["./production-detail.component.sass"],
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
  production: Production;
  constructor(
    private productionsService: ProductionsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduction(id);
    });
  }
  fetchProduction(id: string) {
    this.productionsService.getProduction(id).subscribe((production) => {
      this.production = production;
      const newArray: Array<any> = production.formulas[0].formula.ingredients;
      newArray.forEach((element) => {
        this.arrayPercent.push(element.percentage);
      });
      const result = this.arrayPercent.reduce((a, b) => a + b, 0);
      this.resultPercent = result.toFixed(1);
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
