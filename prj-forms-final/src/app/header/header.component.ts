import { Component } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor( private recipeService: RecipeService){}

  onSaveRecipes(){
    this.recipeService.saveRecipes();
  }

}
