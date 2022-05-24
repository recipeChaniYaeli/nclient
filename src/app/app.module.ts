import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmallRecipeComponent } from './small-recipe/small-recipe.component';
import { AllRecipeComponent } from './all-recipe/all-recipe.component';
import {    FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule}from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipeDetailesComponent } from './recipe-detailes/recipe-detailes.component';
import { HomeComponent } from './home/home.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { LogOutComponent } from './log-out/log-out.component';
import { TimePipe } from './time.pipe';
import { LevelPipe } from './level.pipe';
import { MyBookRecipeComponent } from './my-book-recipe/my-book-recipe.component';
import { AddMealComponent } from './add-meal/add-meal.component';


@NgModule({
  declarations: [
    AppComponent,
    SmallRecipeComponent,
    AllRecipeComponent,
    LoginComponent,
    RegisterComponent,
    AddRecipeComponent,
    RecipeDetailesComponent,
    HomeComponent,
    LogOutComponent,
    TimePipe,
    LevelPipe,
    MyBookRecipeComponent,
    AddMealComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule,SweetAlert2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
