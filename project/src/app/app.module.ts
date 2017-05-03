import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipelistComponent} from './recipe/recipelist/recipelist.component';
import { RecipeitemComponent} from './recipe/recipeitem/recipeitem.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppinglistComponent} from './shopping/shoppinglist/shoppinglist.component';
import { ShoppingeditComponent } from  './shopping/shoppingedit/shoppingedit.component'
import { RecipedetailsComponent } from './recipe/recipedetails/recipedetails.component';
import { RecipeboxComponent } from './recipebox/recipebox.component';
import { ShoppingboxComponent } from './shopping/shoppingbox/shoppingbox.component';
// Custom directives
import { DropdownDirective } from './shared/dropdown.directive';
@NgModule({
  declarations: [
    DropdownDirective,
    AppComponent,
    HeaderComponent,
    RecipelistComponent,
    RecipeitemComponent,
    RecipeComponent,
    ShoppinglistComponent,
    ShoppingeditComponent,
    RecipedetailsComponent,
    RecipeboxComponent,
    ShoppingboxComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
