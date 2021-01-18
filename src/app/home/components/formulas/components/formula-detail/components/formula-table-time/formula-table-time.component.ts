import {Input} from "@angular/core";
import {Component, OnInit} from "@angular/core";
import {Formula} from "@core/model/formulas.model";

@Component({
  selector: "app-formula-table-time",
  templateUrl: "./formula-table-time.component.html",
  styleUrls: ["./formula-table-time.component.sass"],
})
export class FormulaTableTimeComponent implements OnInit {
  @Input() formula: Formula;
  constructor() {}

  ngOnInit(): void {}
}
