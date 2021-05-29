import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Formula } from '@core/model/formulas.model';
import { FormulasService } from '@core/service/formulas/formulas.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-formulas',
  templateUrl: './formulas.component.html',
  styleUrls: ['./formulas.component.sass'],
  providers: [FormulasService],
})
export class FormulasComponent implements OnInit, OnDestroy {
  formulas: Formula[] = [];
  pageSizeOptions: number[] = [1, 3, 6, 9];
  pageEvent: PageEvent;
  searchFormula = '';
  pageSize = 6;
  pageNumber = 1;
  isLoaded = true;
  formulasSubscripted: Subscription;
  observer = {
    next: (dataSource$: Formula[]) => {
      if (this.formulas.length === 0) {
        this.formulas = dataSource$;
        this.isLoaded = false;
      }
    },
    error: (error: any) => {
      console.log(error);
    },
    complete: () => {
      console.log("it's completed");
    },
  };
  constructor(private formulasService: FormulasService) {}
  ngOnInit() {
    this.onGetFormulas();
  }
  onGetFormulas() {
    this.formulasSubscripted = this.formulasService
      .getFormulas()
      .subscribe(this.observer);
  }
  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageNumber = event.pageIndex;
  }
  onSearchFormula(search: string) {
    this.searchFormula = search;
  }
  ngOnDestroy() {
    this.formulasSubscripted.unsubscribe();
  }
}
