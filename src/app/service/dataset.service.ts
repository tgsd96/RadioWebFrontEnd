import { Injectable } from '@angular/core';
import {Http, Headers,RequestOptions,Response} from "@angular/http"
import {AuthService} from './auth.service'
import {Observable} from 'rxjs/Rx'
@Injectable()
export class DatasetService {

  constructor(private authService : AuthService, private http : Http) { }

  getDataset() : Observable<any>{
    var token = this.authService.token;
    var api_url = this.authService.api_url;
    let headers = new Headers({'Authorization':token})
    let options = new RequestOptions({ headers : headers});
    return this.http.get(api_url+"/api/datasets",options)
    .map((resp:Response)=>{
      if(resp.status==200){
        var datalist = resp.json() 
        // if(datalist.id)
        {
        console.log(datalist)
        return { "data" : datalist , "status" : true}
      }
      // else{
      //   return { "data" : null , "status" : false }
      // }
      }
    });
  }
}
