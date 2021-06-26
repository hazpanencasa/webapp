import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Formula } from '@core/model/formulas.model';
import { FormulasService } from '@core/service/formulas/formulas.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-formulas',
  templateUrl: './formulas.component.html',
  styleUrls: ['./formulas.component.sass'],
  providers: [FormulasService],
})
export class FormulasComponent implements OnInit {
  formulas$: Observable<Formula[]>;
  pageSizeOptions: number[] = [3, 6, 9];
  pageEvent: PageEvent;
  searchFormula = '';
  pageSize = 6;
  pageNumber = 0;
  isLoaded = true;
  constructor(private formulasService: FormulasService) {}

  ngOnInit(): void {
    this.formulas$ = this.formulasService.getFormulas();
    this.formulas$.subscribe((data) => {
      console.log('formulas => subscribe');
      this.isLoaded = false;
    });
  }
  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageNumber = event.pageIndex;
  }
  onSearchFormula(search: string) {
    this.searchFormula = search;
  }
}
