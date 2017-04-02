import { Injectable } from '@angular/core';
import {Http, Headers,RequestOptions,Response} from "@angular/http"
import {AuthService} from './auth.service'
import {Observable,Observer} from 'rxjs/Rx'
@Injectable()
export class DatasetService {

  private token : string;
  private api_url : string;

  constructor(private authService : AuthService, private http : Http) {
    this.token = this.authService.token;
    this.api_url = this.authService.api_url;
  }

  getDataset() : Observable<any>{
    let headers = new Headers({'Authorization':this.token})
    let options = new RequestOptions({ headers : headers});
    return this.http.get(this.api_url+"/api/datasets",options)
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

  uploadData(files : FileList):Observable<boolean>{
    // return Observable.
    return Observable.create((observer : Observer<boolean>)=>{
      var formData = new FormData();
      var uploaded = false;
    for( var i=0; i<files.length; i++){
      var file = files[i];
      formData.append('dataset', file, file.name);
    }
    var xhr = new XMLHttpRequest();
    xhr.open('POST',this.api_url+"/api/upload",true);
    xhr.onload = () => {

      if(xhr.status == 200){
        observer.next(true);
        observer.complete();
      }else{
        observer.error(false);
      }
      // return uploaded;
      //console.log(xhr.response)
    }
    xhr.send(formData);
    });

  }

}
