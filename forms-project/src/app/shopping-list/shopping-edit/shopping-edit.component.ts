import {
  Component,
  OnInit,
  ElementRef,
  ViewChild
} from '@angular/core';
import { NgForm } from '@angular/forms';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(Form: NgForm) {
    const ingName = Form.value.nameInput;
    const ingAmount = Form.value.amountInput;
    const newIngredient = new Ingredient(ingName, ingAmount);
    console.log(newIngredient);
    this.slService.addIngredient(newIngredient);
  }

  onClear(Form: NgForm){
    Form.reset();
  }

}
