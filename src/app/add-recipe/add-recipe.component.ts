import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Recipe } from 'src/module/recipe';
import { RecipeService } from '../recipe.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Category } from 'src/module/category';



@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
myForm:FormGroup=new FormGroup({
"Name":new FormControl("",Validators.required),
"Level":new FormControl(null,Validators.max(5)),
"IdUser":new FormControl(sessionStorage.getItem("curentUser")),
"IdCategory":new FormControl(null),
"Description":new FormControl(null),
"Image":new FormControl(null),
"Preparetion":this.fb.array([this.fb.control('')]),
"Re":new FormControl(null),
 "TimeDursation":new FormControl(null),
})

categories:Category[];
 images=["../../assets/image/5.jpg","../../assets/image/1.jpg" ,"../../assets/image/2.jpg" ];
  add():void
  {
  this.ii();
   this.pp();
   

  this.recipeser.AddRecipe(this.myForm.value,this.i,this.p).subscribe(
(succ)=>{
 // alert(succ.Id);
 this.alertWithSuccess();
 console.log(this.recipeser.arrRecipes);
this.recipeser.arrRecipes.push(succ);
this.router.navigate(["allrecipes"]);
//להעבור לקומפננטה all recipes
//לבדוק

},
(err)=>
{
  alert("error exist");
  this.router.navigate(["allrecipes"]);

  //קיים כבר
  //להעבור לקומפננטה all recipes
  //לבדוק
}) }

alertWithSuccess(){
  Swal.fire('Thank you...', 'the recipe was added succesfully!', 'success')
}
  constructor(private recipeser:RecipeService,public router:Router,public fb:FormBuilder) { 
    
  }

  ngOnInit(): void {
    this.recipeser.GetAllRCategory().subscribe(succ=>{this.categories=succ},err=>alert(err));
  }
items=[{line:""}];
pre=[{line:""}];
i=[];
p=[];
ii(){
  for (let index = 0; index < this.items.length-1; index++) {
    this.i[index]=this.items[index].line; 
  }
}
pp(){
  for (let index = 0; index < this.items.length-1; index++) {
    this.p[index]=this.pre[index].line;
    
  }
}

onInput(){
  
  this.items=this.items.filter(o=>o.line!="")
   this.items.push({line:""});
  
}
onInput1(){
  
  
   this.pre=this.pre.filter(o=>o.line!="")
   this.pre.push({line:""});
}
}
