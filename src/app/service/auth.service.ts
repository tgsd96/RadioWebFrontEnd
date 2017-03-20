import { Injectable, EventEmitter } from '@angular/core';
import {Http, Headers, Response,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map'
import {User} from '../models/user'

@Injectable()
export class AuthService {
  public token:string;
  // public api_url ="http://138.197.75.58:8888";
  public api_url ="https://localhost:8080";
  public username = "Tushar";
  loginEvent = new EventEmitter<boolean>();
  constructor(private http:Http) {
    var currentUser =localStorage.getItem('currentUser');
    this.token = currentUser;
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
        this.token = resp.token;
        localStorage.setItem("currentUser",resp.token);
        this.loginEvent.emit(true);
        return true;
    }
    // return false;
  });

}
register(user: User):Observable<Response>{

  return this.http.post(this.api_url+"/api/register",user)
  .map((response:Response)=>{
    console.log(response);
    return response;
  });
}
ping(){
  return this.http.get("http://localhost:8000/api/authenticate")
  .map((response:Response)=>{
    return response;
  })
}

logout():void{
  this.token = null;
  localStorage.removeItem('currentUser');
}


}
