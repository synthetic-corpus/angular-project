import { Component } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthServiceService } from '../auth/auth-service.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor( private recipeService: RecipeService,
               private authService: AuthServiceService ){}

  onSaveRecipes(){
    this.recipeService.saveRecipes();
  }

  onLoadRecipes(){
    this.recipeService.fetchData();
  }

  onLogout(){
    this.authService.onLogOut();
  }

  isAuthenticated(){
    this.authService.isAuthenticated();
    //console.log('is now authenticated? ', this.authService.isAuthenticated());
  }

}
