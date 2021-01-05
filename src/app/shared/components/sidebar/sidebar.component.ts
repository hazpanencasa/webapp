import {Component, OnInit, Output, EventEmitter} from "@angular/core";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.sass"],
})
export class SidebarComponent implements OnInit {
  showSidebar = false;
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter();
  constructor() {}
  ngOnInit(): void {}
  sidebarToggle(event: Event) {
    event.preventDefault();
    this.showSidebar = !this.showSidebar;
    this.toggleSidebar.emit(this.showSidebar);
  }
}
