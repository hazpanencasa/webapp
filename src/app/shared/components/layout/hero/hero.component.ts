import { Component, Input, OnInit } from '@angular/core';
import { Formula } from '@core/model/formulas.model';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.sass'],
})
export class HeroComponent implements OnInit {
  @Input() toggleButtonIntro: boolean;
  @Input() formula: Formula;
  @Input() fontSize: number;
  constructor() {}

  ngOnInit(): void {}
}
