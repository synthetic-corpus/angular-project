import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;


  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService ) { }

  ngOnInit() {
    // These route params determine whether or not it is edit mode.
    // Also determine which recipe it looks at?
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          // When the path changes, reinitilize the form.
          this.initForm();
        }
      );
  }

  private initForm() {
    // This will be populate with information differently depeding on if edit mode.
    let recipeName = '';
    let recipeImgPath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      var recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImgPath = recipe.imagePath;
      recipeDescription = recipe.description;
      if(recipe['ingredients']){
        // If there are ingredients, add that ingriends to the array.
        // Format them so that they are Form Array objects, not the custom
        // ingredient object.
        for ( let ingredient of recipe.ingredients){
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, [Validators.required]),
              'amount': new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          )
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, [Validators.required]),
      'imgPath': new FormControl(recipeImgPath, [Validators.required]),
      'description': new FormControl(recipeDescription, [Validators.required]),
      'ingredients': recipeIngredients
    });
  }

  onAddIngredient(){
    /* Get the Ingredients arrary
      Then, cast it as a FormArray.
      Then, add a new form group to ti.
      Then, make this group hold name and mount with null as initial value. */
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, [Validators.required]),
        'amount': new FormControl(null, [Validators.required])
      })
    )
  }

  onSubmit(){
    // name, description, image, ingredients.
    const someRecipe = new Recipe(
      this.recipeForm.value['name'],
      this.recipeForm.value['description'],
      this.recipeForm.value['imgPath'],
      this.recipeForm.value['ingredients.']
    );
    if (this.editMode === true){
      this.recipeService.updateRecipe(this.id, someRecipe);
    }else{
      this.recipeService.addRecipe(someRecipe);
    }
  }

}
