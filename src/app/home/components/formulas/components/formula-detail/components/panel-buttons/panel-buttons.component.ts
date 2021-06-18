import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-panel-buttons',
  templateUrl: './panel-buttons.component.html',
  styleUrls: ['./panel-buttons.component.sass'],
})
export class PanelButtonsComponent implements OnInit {
  @Output() fontSizeChange = new EventEmitter<number>();
  @Output() changeGridContainer = new EventEmitter<boolean>();
  @Output() introToggle = new EventEmitter<boolean>();
  @Output() imgToggle = new EventEmitter<boolean>();
  @Output() addInfoToggle = new EventEmitter<boolean>();
  @Input() fontSize: number;
  @Input() toggleButtonGridContainer: boolean;
  @Input() toggleButtonIntro: boolean;
  @Input() toggleButtonImg: boolean;
  @Input() toggleButtonAddInfo: boolean;
  constructor() {}

  ngOnInit(): void {}
  onFontSizeChange(data: number) {
    data ? (this.fontSize += 10) : (this.fontSize -= 10);
    this.fontSizeChange.emit(this.fontSize);
  }
  onChangeGrid(gridChanged: any) {
    this.changeGridContainer.emit(gridChanged);
  }
  onIntroToggle(toggle: boolean) {
    this.introToggle.emit(toggle);
  }

  onImgToggle(toggle: boolean) {
    this.imgToggle.emit(toggle);
  }

  onAddInfoToggle(toggle: boolean) {
    this.addInfoToggle.emit(toggle);
  }
  onPrintPDF() {
    window.print();
  }
}
