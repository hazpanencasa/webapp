import { Component, Input, OnInit } from '@angular/core';
import { FormulasService } from '@core/service/formulas/formulas.service';

@Component({
  selector: 'app-table-ingredient-compound-third-layer',
  templateUrl: './table-ingredient-compound-third-layer.component.html',
  styleUrls: ['./table-ingredient-compound-third-layer.component.sass'],
})
export class TableIngredientCompoundThirdLayerComponent implements OnInit {
  @Input() ingredientsCompound: Array<any>;
  @Input() formulaId: string;
  @Input() idIngredientCompound: string;
  @Input() totalGrams: number;
  @Input() totalPercentage: number;
  resultPercentage: number;
  ingredients: Array<any>;

  constructor(private formulasService: FormulasService) {}

  ngOnInit() {
    console.log(this.ingredientsCompound);
    this.ingredientsCompound.forEach((element) => {
      this.formulasService
        .getIngredientCompoundSubCollection(
          this.formulaId,
          this.idIngredientCompound,
          element.ingredient.id
        )
        .subscribe((ingredients) => {
          this.ingredients = ingredients;
        });
    });
  }
  getTotalPercentage(ingredient: any) {
    ingredient.reduce((a: any, b: { percentage: any }) => {
      return (this.resultPercentage = a + b.percentage);
    }, 0);
    return this.resultPercentage.toFixed(1);
  }
  getTotalGrams(ingredient: any) {
    const percentageResult = ingredient.reduce(
      (a: any, b: { percentage: any }) => {
        return a + b.percentage;
      },
      0
    );
    const total = (this.totalGrams * percentageResult) / this.totalPercentage;
    return total.toFixed(1);
  }
}
