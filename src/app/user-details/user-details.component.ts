import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userId:string = sessionStorage.getItem("userID");
  username:string = sessionStorage.getItem("username");
  userDOB:string = sessionStorage.getItem("userDOB");
  userAge:string = sessionStorage.getItem("userAge");

  constructor() { }

  ngOnInit() {
  }

}
