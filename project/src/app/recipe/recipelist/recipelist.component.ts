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

  constructor(private recipeList: RecipeService ) { }
  recipes: Recipe [];

  ngOnInit() {
    
    this.recipes = this.recipeList.getRecipes();
  }

}
