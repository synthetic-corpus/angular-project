import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A test Stew','This is only a test','https://cdn.pixabay.com/photo/2014/08/26/15/24/sausage-428067_960_720.jpg',
    [
      new Ingredient('Beef',2),
      new Ingredient('Thyme',4),
      new Ingredient('Carrots',5)
    ]),
    new Recipe('Cookies','This is not real','https://cdn.pixabay.com/photo/2016/03/18/02/16/cookies-1264263_960_720.jpg',
    [
        new Ingredient('Coconut',2),
        new Ingredient('Oatmeal',4),
        new Ingredient('Sugar',5)
    ]),
    new Recipe('Beef','This is not real','https://static.pexels.com/photos/161481/appetite-banana-calories-catering-161481.jpeg',
    [
      new Ingredient('Dead Cow', 1),
      new Ingredient('Moo',1)
    ])
  ];
  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id) {
    return this.recipes.slice()[id];
  }
}
