import {Component, OnInit} from "@angular/core";
import {Formula} from "@core/model/formulas.model";
import {FormulasService} from "@core/service/formulas/formulas.service";
@Component({
  selector: "app-formulas",
  templateUrl: "./formulas.component.html",
  styleUrls: ["./formulas.component.sass"],
})
export class FormulasComponent implements OnInit {
  constructor(private formulasService: FormulasService) {}

  formulas: Formula[];

  ngOnInit() {
    this.fetchFormulas();
    this.fetchFormula();
  }

  fetchFormulas() {
    this.formulasService.getFormulas().subscribe((formulas) => {
      console.log(formulas);
      this.formulas = formulas;
    });
  }
  fetchFormula() {
    this.formulasService.getFormula().subscribe((formula) => {
      console.log(formula);
    });
  }
}
