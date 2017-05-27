import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {

  constructor(private recipeList: RecipeService,
              private router: Router ) { }
  recipes: Recipe [];

  ngOnInit() {

    this.recipes = this.recipeList.getRecipes();
  }

  onNewRecipe(){
    this.router.navigate(['/recipebox','new'])
  }

}
