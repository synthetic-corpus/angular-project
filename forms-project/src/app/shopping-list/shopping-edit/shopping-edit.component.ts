import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  OnDestroy
} from '@angular/core';
import { NgForm } from '@angular/forms';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { Subscription } from 'rxjs/subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  // Accesses a variable based on its local reference in HTML.
  @ViewChild('x') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    // Takes in the Index from  recipe click.
    // Does something with it.
    // Activates Edit mode!
    this.subscription = this.slService.startedEditing
      .subscribe(
        (index: number) => {
            this.editedItemIndex = index;
            this.editMode = true;
            this.editedItem = this.slService.getIngredient(index);
            // Final thing here initiates the form based on what is
            // already in the Ingredient object "editedItem."
            this.slForm.setValue({
              nameInput: this.editedItem.name,
              amountInput: this.editedItem.amount
            })
        }
      );
  }

  onAddItem(Form: NgForm) {
    const ingName = Form.value.nameInput;
    const ingAmount = Form.value.amountInput;
    const newIngredient = new Ingredient(ingName, ingAmount);
    // console.log(newIngredient);
    if (this.editMode === true){
      this.slService.updateIngredient(this.editedItemIndex,newIngredient);
    }else{
      this.slService.addIngredient(newIngredient);
    }

  }

  onClear(Form: NgForm){
    Form.reset();
    this.editMode = false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
