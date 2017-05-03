import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model'

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {
  ingredients = [
    new Ingredient ('Apple',3),
    new Ingredient ('Sugar',3)
  ];

  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }

}
