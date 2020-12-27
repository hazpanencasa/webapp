import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AuthService} from "./service/auth/auth.service";
import {FormulasService} from "./service/formulas/formulas.service";
import {ProductionsService} from "./service/productions/productions.service";
import {IngredientsService} from "./service/ingredients/ingredients.service";
import {UsersService} from "./service/users/users.service";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    AuthService,
    FormulasService,
    ProductionsService,
    IngredientsService,
    UsersService,
  ],
})
export class CoreModule {}
