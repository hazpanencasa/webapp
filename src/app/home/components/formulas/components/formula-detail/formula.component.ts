import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Formula } from "@core/model/formulas.model";
import { FormulasService } from "@core/service/formulas/formulas.service";

@Component({
  selector: "app-formula",
  templateUrl: "./formula.component.html",
  styleUrls: ["./formula.component.sass"],
})
export class FormulaDetailComponent implements OnInit {
  formula: Formula;
  verificationFormula: boolean;
  constructor(
    private route: ActivatedRoute,
    private formulasService: FormulasService
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
      this.validation();
    });
  }
  validation() {
    if (this.formula.steps[7].ingredients[0].ingredient.formula) {
      this.verificationFormula = true;
    } else if (this.formula.steps[7].temperature === null) {
      this.verificationFormula = false;
    }
  }
}
