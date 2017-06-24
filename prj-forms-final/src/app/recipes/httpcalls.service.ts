import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Recipe } from './recipe.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class HttpcallsService {

  constructor(private http: Http) { }

  storeThis(recipes: Recipe[]){
    return this.http.put('https://udemy-project-49359.firebaseio.com/data.json', recipes);
  }

  retreiveThis(){
    return this.http.get('https://udemy-project-49359.firebaseio.com/data.json')
      .map(
        (response: Response) => {
          return response.json();
        },
      )
      .catch(
        (error: Response) => {
          return Observable.throw('what the fuck?');
        }
      )
  }

}
