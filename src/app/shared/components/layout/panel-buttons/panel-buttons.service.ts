import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PanelButtonsService {
  fontSizeChangeEmitter = new Subject<number>();
  changeGridContainerEmitter = new Subject<boolean>();
  introToggleEmitter = new Subject<boolean>();
  imgToggleEmitter = new Subject<boolean>();
  addInfoToggleEmitter = new Subject<boolean>();
  constructor() {}
}
