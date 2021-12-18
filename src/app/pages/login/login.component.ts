import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm= new FormGroup({
    email: new FormControl('',Validators.required),
  });

  // constructor(private fb:FormBuilder){

  //   this.loginForm = this.fb.group({
  //     loginMail: new FormControl('',Validators.required),
  //     loginPass:new FormControl(),
  //   })
  // }

  ngOnInit(): void {
  }

}
