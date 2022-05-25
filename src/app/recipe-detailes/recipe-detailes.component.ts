import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/module/recipe';
import { Category } from 'src/module/category';
import { User } from 'src/module/user';
import Swal from 'sweetalert2';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detailes',
  templateUrl: './recipe-detailes.component.html',
  styleUrls: ['./recipe-detailes.component.css']
})
export class RecipeDetailesComponent implements OnInit {
recipe:Recipe;
id:string;
category:Category;
  constructor(public active:ActivatedRoute,public recSer:RecipeService,public router:Router,private http:HttpClient) { 
    this.active.params.subscribe((succ)=>{this.id=succ.obj;


    },
    (err)=>{alert("error1")}

    );
  
  }
get(){
 
  this.recSer.GetCategoryById(this.recipe.RecipeCategoryId).subscribe((succ)=>{this.category=succ},
  (error)=>alert("error"))
}
  
  getTheRecipe(){
    this.recSer.GetRecipeById(this.id).subscribe((succ)=>{this.recipe=succ;  this.get();},
    (error)=>alert("error2")


    );
   
  }
  ngOnInit(): void {
    this.getTheRecipe();
  

  }


isShowDelete(){
  //לבדוק אם נכון
var x=sessionStorage.getItem("curentUser")
if (x==this.recipe.RecipeUserId.toString()) {
  return true
}
return false;
}
onDelete(){
Swal.fire({title:"האם אתה בטוח?",showCancelButton: true}).then((result) => {  
  if (result.value) {  
    this.recSer.DeleteRecipe(this.recipe.RecipeId).subscribe((secc)=>{

      this.router.navigate(["allrecipes"]);
      
    },
    err=>{alert("error");
    alert(err);
    })
    Swal.fire(  
      'נמחק!',  
      'המתכון שלך נמחק.',  
      'success'  
    )  
  } else if (result.dismiss === Swal.DismissReason.cancel) {  
    Swal.fire(  
      '!בוטל',  
      'המחיקה בוטלה',  
      'error'  
    )  
  }  
})  
  

}
isShowAddToBook(){
  //todo if have this recipe inthe book
return true

}
onAddToBook(){
  //todo add recipe to book
}

}
