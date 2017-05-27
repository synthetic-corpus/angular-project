import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping/shoppinglist/shopping-list.service';

@Component({
  selector: 'app-recipedetails',
  templateUrl: './recipedetails.component.html',
  styleUrls: ['./recipedetails.component.css']
})
export class RecipedetailsComponent implements OnInit {
  @Input('toDetails') recipe: Recipe;

  constructor(private ShoppingListService: ShoppingListService ) { }

  ngOnInit() {
  }

  ngDoCheck(){

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
