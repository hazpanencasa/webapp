import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {ProductionsService} from "@core/service/productions/productions.service";

@Component({
  selector: "app-production-detail",
  templateUrl: "./production-detail.component.html",
  styleUrls: ["./production-detail.component.sass"],
})
export class ProductionDetailComponent implements OnInit {
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
      console.log(production);
    });
  }
}
