import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/module/user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  seruser:User;
  i:string;
  baseUrl="http://localhost:54716/api/user";
  login={
    id:"",
    password:""
  }
logis():void{
this.log().subscribe(
(succ)=>{
  this.seruser=succ;
  //alert(this.seruser.Name);
  //להעביר לפו בדיקה אם סיסמא לא נכונה להציג הודעה ולאפס
  if(this.checkCorrectPassword(this.login.password))
  {
     Swal.fire({title:"hello "+this.seruser.Name,icon:"success"})
    sessionStorage.setItem("curentUser",succ.Id);
    //alert(localStorage.getItem("curentUser"))
    this.router.navigate(["allrecipes"]);
  }
     
 else {Swal.fire({
  title: "the password is incorrect!!!",
  icon: "warning",
  //background:"red"
 });
this.login.password="";}},
(err:User)=>{
  console.log("err");
  Swal.fire({
    title: "the user doesn't  exist!!!",
    icon: "error",
   });
  
  
  
  this.router.navigate(["register",this.login.id]);

//להעביר לקומפוננטה register
})}

log(){return this.http.get<User>(`${this.baseUrl}?id=${this.login.id}`);}


checkCorrectPassword(pass:string):boolean{
if(pass==this.seruser.Password)
   return true;
return false;   
}



  constructor(private http:HttpClient,public router:Router) { }

  ngOnInit(): void {
  }

}
// swal({
//   title: "Good job!",
//   text: "You clicked the button!",
//   icon: "success",
//   button: "Aww yiss!",
// });
