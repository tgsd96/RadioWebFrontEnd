import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

import {AuthService} from '../../service/auth.service'

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  public loginForm: FormGroup;  
  constructor(private router: Router, private authservice: AuthService, private _fb: FormBuilder) { }

  ngOnInit() {
    this.authservice.logout();
    this.loginForm = this._fb.group({
      email : ['',[Validators.required]],
      password : ['',[Validators.required]]
    });
  }
  login(event){
    console.log(this.loginForm.get('email').value);
    this.authservice.login(this.loginForm.get('email').value,this.loginForm.get('password').value)
    .subscribe(result=>{
      if(result==true){
        // this.router.navigate(['/']);
        console.log(result)
      }
      else{
        console.log("error");
      }
    })
    // this.authservice.ping().subscribe(result=>{
    // console.log(result);
    // });
   // event.preventDefault();
    return false;
  }

  public prevDft(event:Event):void{
    event.preventDefault();
  }

}
