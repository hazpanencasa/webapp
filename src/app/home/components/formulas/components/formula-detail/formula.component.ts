import { Component, OnInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Formula, IngredientsSecondRequest } from '@core/model/formulas.model';
import { FormulasService } from '@core/service/formulas/formulas.service';
import { PanelButtonsService } from '@shared/components/layout/panel-buttons/panel-buttons.service';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-formula',
  templateUrl: './formula.component.html',
  styleUrls: ['./formula.component.sass'],
  providers: [PanelButtonsService],
})
export class FormulaDetailComponent implements OnInit, AfterViewChecked {
  fontSize = 100;
  toggleButtonGridContainer = true;
  toggleButtonIntro = true;
  toggleButtonImg = true;
  toggleButtonAddInfo = true;
  formula: Formula;
  ingredients$: Observable<any>;
  ingredientsCompound: IngredientsSecondRequest[];
  formulaId: string;
  private panelButtonSub: Subscription;
  constructor(
    private route: ActivatedRoute,
    private formulasService: FormulasService,
    private panelButtonsService: PanelButtonsService
  ) {}

  ngOnInit() {
    this.onFetchRouteParams();
    this.fontSizeChanged();
    this.gridContainerChanged();
    this.introToggled();
    this.imgToggled();
    this.addInfoToggled();
  }
  ngAfterViewChecked() {
    // if (this.ingredients) {
    //   setTimeout(() => {
    //     this.ingredientsCompound = this.ingredients.filter(
    //       (element: IngredientsSecondRequest) =>
    //         element.ingredient.formula ? element.ingredient.formula : null
    //     );
    //   });
    // }
  }
  onFetchRouteParams() {
    this.route.params.subscribe((params: Params) => {
      this.formulaId = params.id;
      this.fetchFormula(this.formulaId);
      // this.fetchFormulaIngredients(this.formulaId);
    });
  }
  fetchFormula(id: string) {
    this.formulasService.getFormula(id).subscribe((data) => {
      console.log(data);
      this.formula = data;
    });
  }
  fetchFormulaIngredients(id: string) {
    this.ingredients$ = this.formulasService.getFormulaIngredients(id);
  }
  fontSizeChanged() {
    this.panelButtonSub =
      this.panelButtonsService.fontSizeChangeEmitter.subscribe(
        (fontSize: number) => {
          this.fontSize = fontSize;
        }
      );
  }
  gridContainerChanged() {
    this.panelButtonSub =
      this.panelButtonsService.changeGridContainerEmitter.subscribe(
        (toggle) => (this.toggleButtonGridContainer = toggle)
      );
  }
  introToggled() {
    this.panelButtonSub = this.panelButtonsService.introToggleEmitter.subscribe(
      (toggle) => (this.toggleButtonIntro = toggle)
    );
  }
  imgToggled() {
    this.panelButtonSub = this.panelButtonsService.imgToggleEmitter.subscribe(
      (toggle) => (this.toggleButtonImg = toggle)
    );
  }
  addInfoToggled() {
    this.panelButtonSub =
      this.panelButtonsService.addInfoToggleEmitter.subscribe(
        (toggle) => (this.toggleButtonAddInfo = toggle)
      );
  }
  // ngOnDestroy() {
  //   this.panelButtonSub.unsubscribe();
  // }
}
