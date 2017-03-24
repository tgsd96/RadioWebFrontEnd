import { Injectable, EventEmitter } from '@angular/core';
import {Http, Headers, Response,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';
import {environment} from "../../environments/environment"
import 'rxjs/add/operator/map'
import {User} from '../models/user'

@Injectable()
export class AuthService {
  public token:string;
//  public api_url ="http://138.197.75.58:8888";
  public api_url = environment.api_url;
  public username;
  loginEvent = new EventEmitter<boolean>();
  constructor(private http:Http) {
  }

login(username: string, password: string):Observable<boolean>{
  //let headers = new Headers({'Content-Type':'application/json'});
  //let options = new RequestOptions({headers:headers});
  //localStorage.setItem("currentUser","3e3e3e");
  //this.token = "3e3e3e3e";
  //return true;

  return this.http.post(this.api_url+"/api/test",{username:username,password:password})
  .map((response:Response) => {
    if(response.json())
    {
        var resp = response.json();
        console.log(resp);
        if (resp.token == ""){
          this.loginEvent.emit(false);
          return false;
        }
        console.log(resp.token);
        console.log(resp.username);
        this.username = resp.username;
        this.token = resp.token;
        var user = {"username" : resp.username, "token" : resp.token}
        localStorage.setItem("currentUser",JSON.stringify(user));
        this.loginEvent.emit(true);
        return true;
    }
    // return false;
  });

}
register(user: User):Observable<any>{

  return this.http.post(this.api_url+"/api/register",user)
  .map((response:Response)=>{
    var resp = response.json();
    if(resp.token == ""){
      console.log("Getting in wrong thing")
      this.loginEvent.emit(false);
      return { "message" : resp.message, "status": false};
    }
    this.token = resp.token;
    this.username = resp.username;
    var user = {"username" : resp.username, "token" : resp.token}
    localStorage.setItem("currentUser",JSON.stringify(user));
    //localStorage.setItem("currentUser",r);
    this.loginEvent.emit(true);
    console.log(response);
    return { "message" : resp.message, "status" : true};
  });
}
ping(){
  return this.http.get("http://localhost:8000/api/authenticate")
  .map((response:Response)=>{
    return response;
  })
}
checkToken(){
  console.log("Checking token again")
  var toke = { "token" : this.token};
  console.log(this.token)
  var token = JSON.stringify(toke)
  this.http.get(this.api_url+"/api/token", toke)
  .map((response : Response)=>{
    console.log(response)
  })
}
logout():void{
  this.token = null;
  localStorage.removeItem('currentUser');
}


}
