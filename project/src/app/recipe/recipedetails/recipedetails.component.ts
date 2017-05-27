import { Component, OnInit,} from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping/shoppinglist/shopping-list.service';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipedetails',
  templateUrl: './recipedetails.component.html',
  styleUrls: ['./recipedetails.component.css']
})
export class RecipedetailsComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private ShoppingListService: ShoppingListService,
              private recipeService: RecipeService,
              private currentRoute: ActivatedRoute ) { }

  ngOnInit() {
    const id = +this.currentRoute.params.
      subscribe(
        (params: Params)=> {
          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.id);
        })

  }


  onAddToSL(){
    /* Loop Solution. Untested. Writes many emits
    var toAdd = this.recipe.ingredients;
    toAdd.forEach((object)=>{
      this.ShoppingListService.addThis(object);
    }) */
    // Push and array instead
    var toAdd = this.recipe.ingredients;
    this.ShoppingListService.addThese(toAdd);

  }

}
