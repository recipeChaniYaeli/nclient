import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/module/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl="http://localhost:54716/api/user";

  constructor(private http:HttpClient) { }
login(mail){return this.http.get<User>(`${this.baseUrl}?mail=${mail}`);}
reg(form){

  return this.http.put<User>(this.baseUrl,form.value)
}
}
