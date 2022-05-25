import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/module/user';
import Swal from 'sweetalert2';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  seruser:User;
  i:string;
  log={
    id:"",
    mail:"",
    password:""
  }
logis():void{
this.userSer.login(this.log.mail).subscribe(
(succ)=>{
  this.seruser=succ;
  //alert(this.seruser.Name);
  //להעביר לפו בדיקה אם סיסמא לא נכונה להציג הודעה ולאפס
  if(this.checkCorrectPassword(this.log.password))
  {
     Swal.fire({title:"hello "+this.seruser.UserName,icon:"success"})
    sessionStorage.setItem("curentUser",succ.UserId.toString());
    //alert(localStorage.getItem("curentUser"))
    this.router.navigate(["allrecipes"]);
  }
     
 else {Swal.fire({
  title: "הסיסמא שגויה!!!!!!!!!",
  icon: "warning",
  //background:"red"
 });
this.log.password="";}},
(err:User)=>{
  console.log("err");
  Swal.fire({
    title: "המשתמש אינו קיים!!!!!!!!!!!",
    icon: "error",
   });
  
  
  
  this.router.navigate(["register",this.log.id]);

//להעביר לקומפוננטה register
})}



checkCorrectPassword(pass:string):boolean{
if(pass==this.seruser.UserPassword)
   return true;
return false;   
}



  constructor(private http:HttpClient,public router:Router,public userSer:UserService) { }

  ngOnInit(): void {
  }

}

