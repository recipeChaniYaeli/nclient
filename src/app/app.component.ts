import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/module/category';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'myrecipes';
  categories:Category[]
  constructor(public active:ActivatedRoute,public recipeser:RecipeService,public ROUTER:Router) { }

    ngOnInit(): void {
      this.recipeser.GetAllRCategory().subscribe(succ=>{this.categories=succ},err=>alert(err));
    }
  
name=sessionStorage.getItem("curentUser")
checkIfLogIn()
{
  if (sessionStorage.getItem("curentUser")!=null) {
    //this.ROUTER.navigate(['addrecipe']);
    return 'addrecipe';
  }
  //this.ROUTER.navigate(['login']);
  return 'login';
}
 }
