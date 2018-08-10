import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit 
{
  username:string = '';
  password:string = '';
  constructor(private http:HttpClient, private router:Router, private form:FormsModule) { }

  ngOnInit() {}

  loginUser(event)
  {
    event.preventDefault();
    let url = '/login';
    this.http.post(url, {username:this.username, password:this.password}).subscribe(
      res => {
          if (res['ok'])
          {
            sessionStorage.setItem("userID", res["userID"]);
            sessionStorage.setItem("username", res["username"]);
            sessionStorage.setItem("userDOB", res["userDOB"]);
            sessionStorage.setItem("userAge", res["userAge"]);
            console.log("Validated");
            this.router.navigateByUrl('/account');
          }

          else
          {
            console.log("invalid");
            alert("Username or Password incorrect!");
          }
        }
    );
   }

}
