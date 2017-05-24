import { NgModule } from '@angular/core';
// Import all the components to connect to.
import { HeaderComponent } from './header/header.component';
import { RecipelistComponent } from './recipe/recipelist/recipelist.component';
import { RecipeitemComponent } from './recipe/recipeitem/recipeitem.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppinglistComponent } from './shopping/shoppinglist/shoppinglist.component';
import { ShoppingeditComponent } from  './shopping/shoppingedit/shoppingedit.component'
import { RecipedetailsComponent } from './recipe/recipedetails/recipedetails.component';
import { RecipeboxComponent } from './recipebox/recipebox.component';
import { ShoppingboxComponent } from './shopping/shoppingbox/shoppingbox.component';
// Import the things used for Routing
import { Routes, RouterModule } from '@angular/router';

// Define the Routes
const appRouteZ: Routes =[
  {path: 'recipebox', component: RecipeboxComponent },
  {path: 'shoppinglist', component: ShoppinglistComponent}
]

//Export App Route
@NgModule({
  imports:[
    RouterModule.forRoot(appRouteZ)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule{
  // export class imported as its name.

}
