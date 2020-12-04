import {Component, OnInit} from "@angular/core";

@Component({
  selector: "app-home",
  template: "<app-nav></app-nav>",
  styleUrls: ["./home.component.sass"],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
