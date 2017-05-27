import { Ingredient } from '../../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients = [
    new Ingredient ('Apple',3),
    new Ingredient ('Sugar',3)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  addThis(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addThese(ingredients: Ingredient[]){
    /* The way of many emits.
    for (let ingredient of ingredients){
      this.addThis(ingredient;)
    }
    */
    // The way of Few emits.
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());

  }
}
