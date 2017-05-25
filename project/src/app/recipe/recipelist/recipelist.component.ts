import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {

  /*recipes: Recipe[] = [
    new Recipe('A test Stew','This is only a test','https://cdn.pixabay.com/photo/2014/08/26/15/24/sausage-428067_960_720.jpg'),
    new Recipe('Cookies','This is not real','https://cdn.pixabay.com/photo/2016/03/18/02/16/cookies-1264263_960_720.jpg'),
    new Recipe('Beef','This is not real','https://static.pexels.com/photos/161481/appetite-banana-calories-catering-161481.jpeg')
  ];*/
  @Output('listSays') message = new EventEmitter<Recipe>();

  constructor(private recipeList: RecipeService ) { }
  recipes: Recipe [];

  ngOnInit() {
    //this.message.emit(Recipe[0]);
    this.recipes = this.recipeList.getRecipes();
  }

  passThis(recipeObject){
    this.message.emit(recipeObject);
  }

}
