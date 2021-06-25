import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PanelButtonsService } from './panel-buttons.service';

@Component({
  selector: 'app-panel-buttons',
  templateUrl: './panel-buttons.component.html',
  styleUrls: ['./panel-buttons.component.sass'],
})
export class PanelButtonsComponent implements OnInit {
  @Input() fontSize: number;
  @Input() toggleButtonGridContainer: boolean;
  @Input() toggleButtonIntro: boolean;
  @Input() toggleButtonImg: boolean;
  @Input() toggleButtonAddInfo: boolean;
  constructor(private panelButtonsService: PanelButtonsService) {}

  ngOnInit(): void {}
  onFontSizeChange(data: number) {
    data ? (this.fontSize += 10) : (this.fontSize -= 10);
    this.panelButtonsService.fontSizeChangeEmitter.next(this.fontSize);
  }
  onChangeGrid(gridChanged: boolean) {
    this.panelButtonsService.changeGridContainerEmitter.next(gridChanged);
  }
  onIntroToggle(toggle: boolean) {
    this.panelButtonsService.introToggleEmitter.next(toggle);
  }

  onImgToggle(toggle: boolean) {
    this.panelButtonsService.imgToggleEmitter.next(toggle);
  }

  onAddInfoToggle(toggle: boolean) {
    this.panelButtonsService.addInfoToggleEmitter.next(toggle);
  }
  onPrintPDF() {
    window.print();
  }
}
