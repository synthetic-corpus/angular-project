import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// This import is not required, yet if you want to use *ngFor or such...
import { CommonModule } from '@angular/common';

// Our customized routing module that matches with this module
import { RecipesRoutingModule } from './recipes-routing.module';

// Must import just as any other module.
import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { DropdownDirective } from '../shared/dropdown.directive';

// Takes this TS class and lets Angular know its a module
@NgModule({
  // What Declarations go here?
  declarations:[
    RecipesComponent,
    RecipeStartComponent,
    RecipeListComponent,
    RecipeEditComponent,
    RecipeDetailComponent,
    RecipeItemComponent
  ],
  // Are there services, or Modules which only this module will use?
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RecipesRoutingModule
  ],
  providers: [

  ]
})
export class RecipesModule {

}
