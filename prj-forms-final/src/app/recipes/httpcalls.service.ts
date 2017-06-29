import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Recipe } from './recipe.model';
import { Observable } from 'rxjs/Observable';
import { AuthServiceService } from '../auth/auth-service.service';
import 'rxjs/Rx';

@Injectable()
export class HttpcallsService {

  constructor(private http: Http,
              private authService: AuthServiceService ) { }

  storeThis(recipes: Recipe[]){
    return this.http.put('https://udemy-project-49359.firebaseio.com/data.json', recipes);
  }

  retreiveThis(){
    const token = this.authService.getToken();
    
    return this.http.get('https://udemy-project-49359.firebaseio.com/data.json?auth='+token)
      .map(
        (response: Response) => {
          const recipes = response.json();
          for (let r of recipes){
            // Is possible to return an object without the ingredients array.
            // If not there, this will add an empty ingredients array.
            if (!r['ingredients']){
              r['ingredients'] = [];
            }
          }
          return recipes;
        },
      )
      .catch(
        (error: Response) => {
          return Observable.throw('what the fuck?');
        }
      )
  }

}
