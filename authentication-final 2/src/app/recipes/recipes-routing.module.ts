/* Modules need their own routing.
  The recipes module has not access to the main app-routing.module.ts */

// All Modules need this import.
import { NgModule } from '@angular/core';

// Below are the usual handler of routing.
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth-guard.service';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';

// Duplicated routes from the original routing module.
 const recipesRoutes: Routes = [
   { path: 'recipes', component: RecipesComponent, children: [
     { path: '', component: RecipeStartComponent },
     { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
     { path: ':id', component: RecipeDetailComponent },
     { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] },
   ] }
 ]
 // Modules must have decorator

 @NgModule({
   imports: [
     // Call for child, not for root.
     // All non-app modules are child modules
     RouterModule.forChild(recipesRoutes)
   ],
   exports: [RouterModule]
 })
export class RecipesRoutingModule {}
