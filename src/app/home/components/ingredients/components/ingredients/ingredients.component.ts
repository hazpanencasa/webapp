import {AfterViewInit, Component, ViewChild, OnInit} from "@angular/core";

import {IngredientsService} from "@core/service/ingredients/ingredients.service";
import {Ingredient} from "@core/model/ingredients.model";

import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: "app-ingredients",
  templateUrl: "./ingredients.component.html",
  styleUrls: ["./ingredients.component.sass"],
})
export class IngredientsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ["name", "cost", "creator", "hydration", "id"];
  dataSource: MatTableDataSource<Ingredient>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private ingredientsService: IngredientsService) {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.fetchIngredients();
  }

  async fetchIngredients() {
    try {
      this.ingredientsService.getIngredients().subscribe((ingredients) => {
        this.dataSource.data = ingredients;
      });
    } catch (error) {
      console.log(error);
    }
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
