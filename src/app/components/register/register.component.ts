import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms'
import {Response} from '@angular/http'
import {User} from '../../models/user'
import {AuthService} from '../../service/auth.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm : FormGroup;
  public error : boolean;
  private user : User;
  public errorMessage : string;
  public 
  constructor(private router: Router, private authservice:AuthService
              ,private _fb: FormBuilder) { }

  ngOnInit() {
    this.error = false;
    this.errorMessage = '';
    this.authservice.logout();
    this.registerForm = this._fb.group({
      first : ['',[Validators.required]],
      last : [''],
      email : ['',Validators.required],
      password : ['',Validators.required],
      again : ['',Validators.required],
      prof : ['',Validators.required]
    });
  }

  register(event){
    this.error = false;
    if(this.registerForm.get('password').value!=this.registerForm.get('again').value){
      this.error = true;
      this.errorMessage = "Your passwords does not match, please try again!";
      return false; 
    }
    this.user = new User();
    this.user.email = this.registerForm.get('email').value;
    this.user.first = this.registerForm.get('first').value;
    this.user.last = this.registerForm.get('last').value;
    this.user.password = this.registerForm.get('password').value;
    this.user.prof = this.registerForm.get('prof').value;

    this.authservice.register(this.user)
      .subscribe((result:Object)=>{
        if(result["status"]==false)
          {this.error = true;
          this.errorMessage = result["message"];
          this.registerForm.reset;}
          else{
            
          }
      });



  }

}
