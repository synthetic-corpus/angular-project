import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth-guard.service';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';

const shoppingRoutes: Routes = [
  { path: 'shopping-list', component: ShoppingListComponent }
]

@NgModule({
  imports: [
    // Call for child, not for root.
    // All non-app modules are child modules
    RouterModule.forChild(shoppingRoutes)
  ],
  exports: [RouterModule]
})

export class ShoppingRoutes {}
