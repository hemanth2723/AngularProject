import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css']
})
export class RegisterComponent implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  valuevalidator(){

    var otp = (<HTMLInputElement>document.getElementById("otp")).value;

    if(otp == '020619')
      {
        this.router.navigate(["dashboard"]);
      }
    else
    {
      alert("you have entered wrong pin");
  }
}
}