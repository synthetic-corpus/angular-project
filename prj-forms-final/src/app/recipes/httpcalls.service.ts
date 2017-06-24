import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Recipe } from './recipe.model';

@Injectable()
export class HttpcallsService {

  constructor(private http: Http) { }

  storeThis(recipes: Recipe[]){
    return this.http.post('https://udemy-project-49359.firebaseio.com/data.json', recipes);
  }

}
