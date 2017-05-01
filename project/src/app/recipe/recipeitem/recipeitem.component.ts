import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html',
  styleUrls: ['./recipeitem.component.css']
})
export class RecipeitemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output('recipeItemSays') message = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  emitThis() {
    this.message.emit(this.recipe);
  }

}
