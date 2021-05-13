import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { PageEvent } from '@angular/material/paginator';
import {
  Formula,
  IngredientFormulaSecondRequest,
} from '@core/model/formulas.model';
import { FormulasService } from '@core/service/formulas/formulas.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-formulas',
  templateUrl: './formulas.component.html',
  styleUrls: ['./formulas.component.sass'],
  providers: [FormulasService],
})
export class FormulasComponent implements OnInit {
  hydration: string;
  constructor(
    private formulasService: FormulasService,
    private db: AngularFirestore
  ) {}
  formulas: any;
  pageSizeOptions: number[] = [3, 6, 9];
  pageEvent: PageEvent;
  filterFormula = '';
  counter = 0;
  pageSize = 6;
  pageNumber = 1;
  isLoaded = true;
  ngOnInit(): void {
    this.formulasService.getFormulas().subscribe((data: any) => {
      console.log(data);
    });
    // this.fetchFormulas();
    // this.formulas = this.formulasService.getFormulas();
    // console.log(this.formulas);
  }
  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageNumber = event.pageIndex + 1;
  }
  fetchFormulas() {
    // this.formulasService.getFormulas().subscribe((formulas) => {
    //   console.log(formulas);
    //   this.formulas = formulas;
    //   this.isLoaded = false;
    // });
    this.formulas = this.formulasService.getFormulas();
    // console.log(this.formulas);
  }
}
