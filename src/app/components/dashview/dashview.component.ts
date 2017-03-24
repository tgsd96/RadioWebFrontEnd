import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/auth.service"
import {DatasetService} from '../../service/dataset.service'
import {FileUploader} from 'ng2-file-upload'

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/'
@Component({
  selector: 'app-dashview',
  templateUrl: './dashview.component.html',
  styleUrls: ['./dashview.component.css']
})
export class DashviewComponent implements OnInit {
  public uploader:FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }
  datasets = [{
    "id" : 1,
    "title" : "CRX",
    "status" : "active",
    "posted" : "4 days ago"
  },
  {
    "id" : 2,
    "title" : "X-Ray",
    "status" : "inactive",
    "posted" : "2 days ago"
  }
  ];
  clickedChild : boolean = false;
  constructor(private authservice : AuthService, private datasetService : DatasetService) { }
  dataset ;
  ngOnInit() {
    var data;
    this.datasetService.getDataset().subscribe(
      (result) =>{
        data = result;
        this.datasets = result.data.datasets
        console.log(data);
      }
    )
    console.log(data)
  }
  checkToken(){
    console.log("checking token")
    this.authservice.checkToken();
  }
}
