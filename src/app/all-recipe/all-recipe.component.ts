import { Component, OnInit } from '@angular/core';
import { Category } from 'src/module/category';
import { Recipe } from 'src/module/recipe';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-all-recipe',
  templateUrl: './all-recipe.component.html',
  styleUrls: ['./all-recipe.component.css']
})
export class AllRecipeComponent implements OnInit {
 arr:Recipe[];//=this.recipServ.arrRecipes; 
categories:Category[];
 //קבלתי את המערךs
  constructor(public recipServ:RecipeService) { 
  
  }

  ngOnInit(): void {
    this.recipServ.GetAllRecipe().subscribe((succ:Recipe[])=>{this.recipServ.arrRecipes=succ;this.arr=succ},(err)=>{console.log(err);})
    this.recipServ.GetAllRCategory().subscribe(succ=>{this.categories=succ},err=>alert(err));
  }
  a:Recipe[];
  onFilter(){
    
    this.arr=this.recipServ.arrRecipes;
    this.a=this.recipServ.arrRecipes;

    if (this.filter.time!=null) {
      this.arr=this.arr.filter(o=>o.RecipeTimeDursation<this.filter.time)
      this.a=this.arr;
    }
    else{this.arr=this.a;

    } 
 if (this.filter.name!="") {
   this.arr=this.arr.filter(o=>o.RecipeName.includes(this.filter.name,0))
   this.a=this.arr;
 }
else this.arr=this.a;

if (this.filter.category!="") {
  this.arr=this.arr.filter(o=>o.RecipeCategoryId.toString()==this.filter.category)
}
else this.arr=this.a;
  }

filter={
  time:null,
  name:"",
  category:""
}
}
