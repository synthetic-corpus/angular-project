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
  /*@ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;*/
  @ViewChild('x') xForm: NgForm;
  // nameInput: string;
  // amountInput: number;


  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(Form: NgForm) {
    const ingName = this.xForm.form.value.nameInput;
    const ingAmount = this.xForm.form.value.amountInput;
    const newIngredient = new Ingredient(ingName, ingAmount);
    console.log(newIngredient);
    this.slService.addIngredient(newIngredient);
  }

  onClear(){
    this.xForm.reset();
  }

}
