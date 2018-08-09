import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import { defaultStyleSanitizer } from '../../../node_modules/@angular/core/src/sanitization/sanitization';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit 
{
  username:string = '';
  password:string = '';
  constructor(private router:Router, private form:FormsModule) { }

  ngOnInit() 
  {
    console.log("Testing is DOM is ready");

    if (typeof(Storage) != "undefined")
    {
      console.log("storage ready");
      sessionStorage.setItem("lastname", "Janssen");
      console.log(sessionStorage.getItem("lastname"));
    }
    else
    {
      alert("Local storage not available");
    }
  }

  loginUser(event)
  {
    event.preventDefault();
    if (this.username == "Dylan" && this.password == "123")
    {
      if (typeof(Storage) != "undefined")
      {
        sessionStorage.setItem("userID", "1");
        sessionStorage.setItem("username", this.username);
        sessionStorage.setItem("userDOB", "04/03/1993");
        sessionStorage.setItem("userAge", "25");
      }
      this.router.navigateByUrl('/account');
    }
    else 
    {
      alert("Username or Password incorrect!");     
    }
  }

}
