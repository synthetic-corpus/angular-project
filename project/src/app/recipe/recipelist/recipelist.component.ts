import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Stew','This is only a test','http://maxpixel.freegreatpicture.com/static/photo/2x/Plate-Cookies-Chocolate-Cookies-Confectionery-1103792.jpg')
  ];
  @Output('listSays') message = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  passThis(recipeObject){
    this.message.emit(recipeObject);
  }

}
