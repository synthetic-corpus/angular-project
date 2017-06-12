import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {
  ingredients: Ingredient [];
  private subscription: Subscription;

  constructor(private listService: ShoppingListService ) { }

  ngOnInit() {
    this.ingredients = this.listService.getIngredients();
    this.subscription = this.listService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        // Listen to Emit from Shopping-list service.
        // expects an array. Updates the array that was initialized above.
        this.ingredients = ingredients;
      }
    )
  }

  addThis(ingredient: Ingredient){
    this.listService.addThis(ingredient);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
