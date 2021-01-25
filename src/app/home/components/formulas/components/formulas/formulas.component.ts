import { Component, OnInit } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";
import { Formula } from "@core/model/formulas.model";
import { FormulasService } from "@core/service/formulas/formulas.service";

@Component({
  selector: "app-formulas",
  templateUrl: "./formulas.component.html",
  styleUrls: ["./formulas.component.sass"],
  providers: [FormulasService],
})
export class FormulasComponent implements OnInit {
  constructor(private formulasService: FormulasService) {}
  formulas: Formula[];
  pageSizeOptions: number[] = [4, 8, 12, 16, 24, 35];
  pageEvent: PageEvent;
  filterFormula = "";
  counter = 0;
  pageSize = 4;
  pageNumber = 1;
  ngOnInit() {
    this.fetchFormulas();
  }
  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageNumber = event.pageIndex + 1;
  }
  async fetchFormulas() {
    try {
      const result = this.formulasService
        .getFormulas()
        .subscribe((formulas) => {
          this.formulas = formulas;
        });
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}
