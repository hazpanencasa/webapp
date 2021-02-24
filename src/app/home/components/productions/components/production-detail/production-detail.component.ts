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
}
