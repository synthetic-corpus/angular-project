import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  // An empty array of Ingredients.
  public ingredients: Ingredient[];

  // When this model is constructed, it will now take an array of ingredients too.
  constructor(name: string, description: string, imagePath: string,
              ingredients: Ingredient[]){
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
