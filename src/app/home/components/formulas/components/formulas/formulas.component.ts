import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Formula} from "@core/model/formulas.model";
import {FormulasService} from "@core/service/formulas/formulas.service";
@Component({
  selector: "app-formulas",
  templateUrl: "./formulas.component.html",
  styleUrls: ["./formulas.component.sass"],
  providers: [FormulasService],
})
export class FormulasComponent implements OnInit {
  constructor(
    private formulasService: FormulasService,
    private router: Router
  ) {}

  formulas: Formula[];
  ngOnInit() {
    this.fetchFormulas();
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
  goToDetail(id: string) {
    this.router.navigate([id]);
  }
}
