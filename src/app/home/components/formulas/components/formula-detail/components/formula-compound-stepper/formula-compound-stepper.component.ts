import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-formula-compound-stepper',
  templateUrl: './formula-compound-stepper.component.html',
  styleUrls: ['./formula-compound-stepper.component.sass'],
})
export class FormulaCompoundStepperComponent implements OnInit {
  @Input() ingredientsCompound: Array<any>;
  @Input() fontSize: number;
  constructor() {}

  ngOnInit() {
    // console.log(this.ingredientsCompound);
  }
}
