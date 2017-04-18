import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Stew','This is only a test','http://www.clipartkid.com/images/523/plate-of-chocolate-chip-cookies-clip-art-WuAWqU-clipart.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
