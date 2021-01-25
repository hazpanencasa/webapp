import { Component, Input, OnInit } from "@angular/core";
import { Formula } from "@core/model/formulas.model";
import { modalFormula } from "@utils/modal";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.sass"],
})
export class CardComponent implements OnInit {
  @Input() formula: Formula;
  constructor() {}

  ngOnInit(): void {}

  showModal(img: string) {
    modalFormula(img);
  }
}
