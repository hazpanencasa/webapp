import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tbody',
  templateUrl: './tbody.component.html',
  styleUrls: ['./tbody.component.sass'],
})
export class TbodyComponent implements OnInit {
  @Input() ingredients: any;
  @Input() units: string;
  @Input() unitWeight: string;
  @Input() fontSize: number;
  resultPercent: number;
  weightTotal: number;
  constructor() {}

  ngOnInit() {
    const result = this.ingredients.reduce((a, b) => {
      return a + b.percentage;
    }, 0);
    this.resultPercent = result;
    this.weightTotal = parseInt(this.unitWeight, 0) * parseInt(this.units, 10);
  }
}
