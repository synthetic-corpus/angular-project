import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipelistComponent } from './recipelist/recipelist.component';
import { RecipeitemComponent } from './recipeitem/recipeitem.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { ShoppingeditComponent } from './shoppingedit/shoppingedit.component';
import { RecipedetailsComponent } from './recipe/recipedetails/recipedetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipelistComponent,
    RecipeitemComponent,
    RecipeComponent,
    ShoppinglistComponent,
    ShoppingeditComponent,
    RecipedetailsComponent
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
