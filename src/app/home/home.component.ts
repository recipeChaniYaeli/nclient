import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
arr=["../../assets/image/0.jpg"]
arr2=["../../assets/image/0.jpg"]
  constructor() { }

  ngOnInit(): void {
    for(let i=0;i<27;i++){
       this.arr[i]=`../../assets/image/${i}.jpg`;
    }
    for(let i=0;i<7;i++){
      this.arr2[i]=`../../assets/image/${i}.jpg`;
   }
  }

}
