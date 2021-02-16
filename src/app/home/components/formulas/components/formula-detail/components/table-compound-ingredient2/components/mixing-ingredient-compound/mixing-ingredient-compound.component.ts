import { Input } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { Formula } from "@core/model/formulas.model";

@Component({
  selector: "app-mixing-ingredient-compound",
  templateUrl: "./mixing-ingredient-compound.component.html",
  styleUrls: ["./mixing-ingredient-compound.component.sass"],
})
export class MixingIngredientCompoundComponent implements OnInit {
  @Input() formula: Formula;

  constructor() {}

  ngOnInit(): void {}
}
