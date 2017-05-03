import { Component, OnInit, DoCheck } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
@Component({
  selector: 'app-recipebox',
  templateUrl: './recipebox.component.html',
  styleUrls: ['./recipebox.component.css']
})
export class RecipeboxComponent implements OnInit {
  recipe;

  constructor() { }

  ngOnInit() {
  }

  onDetails(event) {
    this.recipe = event;
    console.log(this.recipe);
  }

}
