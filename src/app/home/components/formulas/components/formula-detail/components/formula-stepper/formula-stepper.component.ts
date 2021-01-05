import {Component, OnInit, Input} from "@angular/core";
import {Formula} from "@core/model/formulas.model";
import {STEPPER_GLOBAL_OPTIONS} from "@angular/cdk/stepper";

@Component({
  selector: "app-formula-stepper",
  templateUrl: "./formula-stepper.component.html",
  styleUrls: ["./formula-stepper.component.sass"],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false},
    },
  ],
})
export class FormulaStepperComponent implements OnInit {
  @Input() formula: Formula;
  panelOpenState1 = false;
  panelOpenState2 = false;
  constructor() {}

  ngOnInit(): void {}
}
