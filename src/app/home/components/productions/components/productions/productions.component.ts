import { Component, OnInit } from "@angular/core";
import { ProductionsService } from "@core/service/productions/productions.service";
import { Production } from "@core/model/productions.model";
import { PageEvent } from "@angular/material/paginator";
@Component({
  selector: "app-productions",
  templateUrl: "./productions.component.html",
  styleUrls: ["./productions.component.sass"],
})
export class ProductionsComponent implements OnInit {
  filterProduction = "";
  pageSizeOptions: number[] = [3, 6, 9];
  pageEvent: PageEvent;
  pageSize = 9;
  pageNumber = 1;
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
  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageNumber = event.pageIndex + 1;
  }
}
