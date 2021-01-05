import {Component, OnInit} from "@angular/core";
import {ProductionsService} from "@core/service/productions/productions.service";
import {Production} from "@core/model/productions.model";
@Component({
  selector: "app-productions",
  templateUrl: "./productions.component.html",
  styleUrls: ["./productions.component.sass"],
})
export class ProductionsComponent implements OnInit {
  productions: Production[];
  constructor(private productionsService: ProductionsService) {}

  ngOnInit() {
    this.fetchProductions();
  }
  fetchProductions() {
    this.productionsService.getProductions().subscribe((productions) => {
      this.productions = productions;
    });
  }
}
