import {Component, OnInit} from "@angular/core";
import {ProductionsService} from "@core/service/productions/productions.service";
import {Production} from "@core/model/productions.model";
@Component({
  selector: "app-productions",
  templateUrl: "./productions.component.html",
  styleUrls: ["./productions.component.sass"],
})
export class ProductionsComponent implements OnInit {
  constructor(private productionsService: ProductionsService) {}

  ngOnInit() {
    this.productionsService.getProductions().subscribe((productions) => {
      // console.log(productions);
    });
  }
}
