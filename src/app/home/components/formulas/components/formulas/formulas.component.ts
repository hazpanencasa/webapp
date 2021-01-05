import {Component, OnInit} from "@angular/core";

import {Formula} from "@core/model/formulas.model";
import {FormulasService} from "@core/service/formulas/formulas.service";
import {slider} from "@utils/animation";

@Component({
  selector: "app-formulas",
  templateUrl: "./formulas.component.html",
  styleUrls: ["./formulas.component.sass"],
  providers: [FormulasService],
  animations: [slider],
})
export class FormulasComponent implements OnInit {
  constructor(private formulasService: FormulasService) {}
  filterFormula = "";
  counter = 0;
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
          console.log(formulas);
        });
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  backwardControl() {
    const $carousel = document.getElementById("carousel");
    if (this.counter === 0) {
      console.log(this.counter, "esta en 0");
    } else if (this.counter === -7650) {
      this.counter += 650;
      $carousel.style.transform = `translateX(${this.counter}px)`;
      $carousel.style.transition = ".5s";
    } else {
      this.counter += 500;
      console.log(this.counter, "no esta en cero");
      $carousel.style.transform = `translateX(${this.counter}px)`;
      $carousel.style.transition = ".5s";
    }
  }
  forwardControl() {
    const $carousel = document.getElementById("carousel");
    if (this.counter === -7500) {
      console.log(this.counter, "llego al limite");
      this.counter -= 150;
      $carousel.style.transform = `translateX(${this.counter}px)`;
      $carousel.style.transition = ".5s";
    } else if (this.counter === -7650) {
      console.log(this.counter);
    } else {
      this.counter -= 500;
      console.log(this.counter);
      $carousel.style.transform = `translateX(${this.counter}px)`;
      $carousel.style.transition = ".5s";
    }
  }
}
