import { Component, OnInit } from '@angular/core';
 import { user } from "../Model/user";
import { loginService } from "../services/userService";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  users: user[];
   //data:String;


  constructor(private _loginService:loginService) { 
  }

  ngOnInit() {
    // this._loginService.getUsers().subscribe(loginData  =>{
    // this.users = loginData;
    // console.log(this.users);
    // });
    this.login();
  }

  login(){
    this._loginService.login("abhay.ciem@gmail.com","abhay").subscribe(loginData  =>{
      this.users = loginData;
      console.log(loginData);
      localStorage.setItem("userInfo",JSON.stringify(loginData));
      debugger
      var data = localStorage.getItem("userInfo");
      var teste = data;
      });
    }
}
