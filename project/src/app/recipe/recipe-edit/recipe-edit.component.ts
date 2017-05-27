import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;

  constructor(private currentRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.currentRoute.params
      .subscribe(
        (p:Params) => {
          this.id = +p['id'];
          // If there is no id parameter, than we are in edit mode?
          this.editMode = p['id'] != null;
        }
      )


  }

}
