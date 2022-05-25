import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from 'src/module/category';
import { Recipe } from 'src/module/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  arrRecipes:Recipe[];
baseUrl="http://localhost:54716/api/recipe";
 //images=["../../assets/image/5.jpg","../../assets/image/1.jpg" ,"../../assets/image/3.jpg","../../assets/image/20.jpg"  ];

GetCategoryById(id)
{
  return this.http.get<Category>(`${this.baseUrl}/GetCategoryById?id=${id}`);
}
GetAllRCategory()
{
  return this.http.get<Category[]>(`${this.baseUrl}/GetAllRCategory`);
}
GetAllRecipe(){
  return this.http.get<Recipe[]>(this.baseUrl+"/GetAllRecipe");
}
GetRecipeById(id){
  return this.http.get<Recipe>(`${this.baseUrl}/GetRecipeById?id=${id}`);
}
GetRecipeByTime(time){
  return this.http.get<Recipe[]>(`${this.baseUrl}?time=${time}`)
}
AddRecipe(recipe:Recipe,x:string[],y:string[]){
  //todo 
  // recipe.Preparetion=y;
  // recipe.ListOfRe=x;
  let num=Math.floor(Math.random() * 27);
  if(recipe.RecipeCategoryId==null)
    recipe.RecipeCategoryId=Math.floor(Math.random() * 4);
  recipe.RecipeImage="../../assets/image/"+num+".jpg"
  //this.images[parseInt( recipe.IdCategory)-1];
return this.http.post<Recipe>(this.baseUrl,recipe);
}
//לא בטוח שזה טוב
DeleteRecipe( id){
  return this.http.delete<string>(`${this.baseUrl}?id=${id}`);
}
PutRecipe(recipe:Recipe,id){
return this.http.put<Recipe>(`${this.baseUrl}?id=${id}`,recipe)
}
  constructor(private http:HttpClient) { }
}
