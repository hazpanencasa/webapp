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
    });
  }
}
