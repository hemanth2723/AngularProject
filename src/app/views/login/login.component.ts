import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'


@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm:FormGroup;

  constructor(private fb: FormBuilder) {
    this.createLoginForm();
   }

   createLoginForm(){
     this.loginForm = this.fb.group({
      name:['', Validators.required],
      phone:['', [Validators.required, Validators.maxLength(10)] ]
     });
   }

  ngOnInit() {}
  
  onclick(){
      if(this.loginForm.valid){
        console.log(this.loginForm.value);
        document.getElementById("uname").setAttribute("readonly", "readonly");
        document.getElementById("pnum").setAttribute("readonly", "readonly");
      }
        

  }
}

// function phoneNumberValidator(control:AbstractControl) {
   
//   var reg = new RegExp("^\d{10}$");
//   if(control && reg.test(control)){

//   }
//   return null;

// }