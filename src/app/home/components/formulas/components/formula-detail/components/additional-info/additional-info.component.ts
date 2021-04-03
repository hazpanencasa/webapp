import { Component, Input, OnInit } from '@angular/core';
import { Formula } from '@core/model/formulas.model';

@Component({
  selector: 'app-additional-info',
  templateUrl: './additional-info.component.html',
  styleUrls: ['./additional-info.component.sass'],
})
export class AdditionalInfoComponent implements OnInit {
  @Input() fontSize: number;
  @Input() formula: Formula;
  constructor() {}

  ngOnInit() {}
}
