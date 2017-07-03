import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Component relevant to shopping.
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations:[
    ShoppingListCompnent,
    ShoppingEditCompnent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
