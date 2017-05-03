import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipedetails',
  templateUrl: './recipedetails.component.html',
  styleUrls: ['./recipedetails.component.css']
})
export class RecipedetailsComponent implements OnInit {
  @Input('toDetails') details;

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck(){
    
  }

}
