import {Component, OnInit, Input} from "@angular/core";
import {Formula} from "@core/model/formulas.model";

@Component({
  selector: "app-table3",
  templateUrl: "./table3.component.html",
  styleUrls: ["./table3.component.sass"],
})
export class Table3Component implements OnInit {
  @Input() formula: Formula;
  constructor() {}

  ngOnInit(): void {}
}
