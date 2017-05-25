import { Ingredient } from '../../shared/ingredient.model';

export class ShoppingListService {
  private ingredients = [
    new Ingredient ('Apple',3),
    new Ingredient ('Sugar',3)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  addThis(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }
}
