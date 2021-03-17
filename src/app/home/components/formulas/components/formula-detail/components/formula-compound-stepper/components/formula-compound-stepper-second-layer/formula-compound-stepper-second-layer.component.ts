import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-formula-compound-stepper-second-layer',
  templateUrl: './formula-compound-stepper-second-layer.component.html',
  styleUrls: ['./formula-compound-stepper-second-layer.component.sass'],
})
export class FormulaCompoundStepperSecondLayerComponent implements OnInit {
  @Input() idIngredientsCompound: string;
  @Input() idFormula: string;
  @Input() ingredientsCompoundOutput: any;
  constructor() {}

  ngOnInit() {
    // console.log(this.ingredientsCompoundOutput);
  }
}
