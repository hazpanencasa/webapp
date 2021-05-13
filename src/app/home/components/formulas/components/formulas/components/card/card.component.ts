import { Component, Input, OnInit, Output } from '@angular/core';
import {
  AngularFirestoreCollection,
  QueryDocumentSnapshot,
} from '@angular/fire/firestore';
import {
  Formula,
  IngredientsFormula,
  IngredientsSecondRequest,
} from '@core/model/formulas.model';
import { FormulasService } from '@core/service/formulas/formulas.service';
import { modalFormula } from '@utils/modal';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass'],
})
export class CardComponent implements OnInit {
  @Input() formula: QueryDocumentSnapshot<Formula>;
  formulaData: Formula;
  path: string;
  // ingredientsRef: AngularFirestoreCollection;
  ingredients: IngredientsSecondRequest[];

  constructor(private formulaService: FormulasService) {}

  ngOnInit(): void {
    this.formulaData = this.formula.data();
    // console.log(this.formulaData);
    this.path = this.formula.ref.path;
    this.formulaService
      .getFormulaIngredients(this.path)
      .subscribe((ingredients: IngredientsSecondRequest[]) => {
        console.log(ingredients);

        this.ingredients = ingredients;
      });
    // this.ingredientsRef = this.db.collection(this.path + '/ingredients');
    // this.ingredient = this.ingredientsRef.snapshotChanges();
  }

  showModal(img: string) {
    modalFormula(img);
  }
}
