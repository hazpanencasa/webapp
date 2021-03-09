import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  langs: string[] = [];
  constructor(public translate: TranslateService) {
    this.translate.setDefaultLang('en');
    // this.translate.use('es');
    this.translate.addLangs(['es', 'en']);
    this.langs = this.translate.getLangs();
  }
  ngOnInit() {
    AOS.init();
  }
  changeLang(lang: string) {
    this.translate.use(lang);
  }
}
