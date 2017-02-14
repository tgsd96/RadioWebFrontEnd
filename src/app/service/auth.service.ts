import { Injectable } from '@angular/core';
import {Http, Headers, Response,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map'
import {User} from '../models/user'

@Injectable()
export class AuthService {
  public token:string;
  public api_url ="localhost:8000"; 
  constructor(private http:Http) {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

login(username: string, password: string):Observable<boolean>{
  //let headers = new Headers({'Content-Type':'application/json'});
  //let options = new RequestOptions({headers:headers});

  return this.http.post("https://localhost:8080/api/test",{username:username,password:password})
  .map((response:Response) => {
    if(response.json())
    {
        var resp = response.json();
        if (resp.token == ""){
          return false;
        }
        console.log(resp.token);
        this.token = resp.token;
        localStorage.setItem("currentUser",resp.token);
        return true;
    }
    return false;  
  });
}
register(user: User):Observable<Response>{

  return this.http.post("https://localhost:8080/api/register",user)
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
