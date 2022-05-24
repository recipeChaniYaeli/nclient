import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Recipe} from 'src/module/recipe';

@Component({
  selector: 'app-small-recipe',
  templateUrl: './small-recipe.component.html',
  styleUrls: ['./small-recipe.component.css']
})
export class SmallRecipeComponent implements OnInit {

  constructor(public router:Router) { }
@Input()
myRecipe:Recipe;
  ngOnInit(): void {
  }
  
  checkIfLogIn()
  {
    if (sessionStorage.getItem("curentUser")!=null) {
      return "recipedetailes/"+this.myRecipe.Id;
    }
    return 'login';
  }
  
}
