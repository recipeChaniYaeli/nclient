import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMealComponent } from './add-meal/add-meal.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { AllRecipeComponent } from './all-recipe/all-recipe.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LogOutComponent } from './log-out/log-out.component';
import { LoginComponent } from './login/login.component';
import { MyBookRecipeComponent } from './my-book-recipe/my-book-recipe.component';
import { RecipeDetailesComponent } from './recipe-detailes/recipe-detailes.component';
import { RecipeToMealComponent } from './recipe-to-meal/recipe-to-meal.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
{path:"home",component:HomeComponent},
{path:"login",component:LoginComponent},
{path:"register",component:RegisterComponent},
{path:"allrecipes",component:AllRecipeComponent,children:[{path:"recipedetailes/:id",component:RecipeDetailesComponent},
{path:"addrecipe",component:AddRecipeComponent}]},
{path:"recipedetailes/:obj",component:RecipeDetailesComponent},
{path:"register/:id",component:RegisterComponent},
{path:"addrecipe",component:AddRecipeComponent},
{path:"logout",component:LogOutComponent},
{path:"mybookrecipe",component:MyBookRecipeComponent},
{path:"",component:HomeComponent},
{path:"addmeal",component:AddMealComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }