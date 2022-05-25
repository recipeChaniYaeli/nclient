import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/module/user';
import Swal from 'sweetalert2';
import { DifferentValidation } from '../differentValidation';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user={
    id:"weyy",
    name:"fff",
mail:"ghghg",
password:"777"
  }
  //לעשות בדיקות תקינות
myForm:FormGroup=new FormGroup({
"name":new FormControl(null,Validators.required),
"password":new FormControl(null,Validators.required),
"truepassword":new FormControl(null,Validators.required),
"mail":new FormControl(null,Validators.required)
},DifferentValidation.diff("password","truepassword"))

regis(){
  
this.userSer.reg(this.myForm).subscribe(
(succ)=>{
Swal.fire({
title:"",
text:`The user ${succ.UserName} was added succssfuly...`,
icon:"success",
})
  sessionStorage.setItem("curentUser",succ.UserId.toString());
  //alert(localStorage.getItem("curentUser"))
  this.router.navigate(["allrecipes"]);
  
  // ,לבדוק אם נכון ,להכניס לדף מתכונים
},
(err)=>{
  Swal.fire({
title:"The user is exist!",
icon:"warning",
  });
  
  //לנקות את הטופס
}
)
}

i:string;

//שליפת הנתונים שנשלחו עי ה login
  constructor(private http:HttpClient,public active:ActivatedRoute,public router:Router,public userSer:UserService) {
    this.active.params.subscribe(p=>this.myForm.get("id").setValue(p["id"]))
    
   }

  ngOnInit(): void {
  }

}
