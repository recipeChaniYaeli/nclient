import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Category } from 'src/module/category';
import { Recipe } from 'src/module/recipe';
import { Meal } from 'src/module/meal';
@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.css']
})
export class AddMealComponent implements OnInit {
meal:Meal
  constructor(private recipeser:RecipeService) { }
  categories:Category[];
  recipes:Recipe[];
  ngOnInit(): void {
   // this.recipeser.GetAllMealCategory().subscribe(succ=>{this.categories=succ},err=>alert(err));
    this.recipeser.GetAllRecipe().subscribe(succ=>{this.recipes=succ},err=>alert(err));

  }
  addMeal(){
    //todo add meal
  }
}
