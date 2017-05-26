import { Component, OnInit, ElementRef, ViewChild, } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shoppinglist/shopping-list.service';
@Component({
  selector: 'app-shoppingedit',
  templateUrl: './shoppingedit.component.html',
  styleUrls: ['./shoppingedit.component.css']
})
export class ShoppingeditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  //@Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private listService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem() {
    const newIngredient = new Ingredient(
      this.nameInputRef.nativeElement.value,
      this.amountInputRef.nativeElement.value);
    //this.ingredientAdded.emit(newIngredient);
      this.listService.addThis(newIngredient);
      console.log(newIngredient);
      console.log(this.listService.getIngredients())
  }

}
