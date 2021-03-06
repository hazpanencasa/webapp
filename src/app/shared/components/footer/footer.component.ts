import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass'],
})
export class FooterComponent implements OnInit {
  @Input() clickToggle: boolean;
  year: number;
  constructor() {}

  ngOnInit() {
    const today = new Date();
    this.year = today.getFullYear();
  }
}
