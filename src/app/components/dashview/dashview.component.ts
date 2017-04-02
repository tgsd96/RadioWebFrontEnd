import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/auth.service"
import {DatasetService} from '../../service/dataset.service'

@Component({
  selector: 'app-dashview',
  templateUrl: './dashview.component.html',
  styleUrls: ['./dashview.component.css']
})
export class DashviewComponent implements OnInit {
  public spinner =true;
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
  public file;
  public uploadMessage : string;
  public statusFlag  = false;
  clickedChild : boolean = false;
  onupload = false;
  constructor(private authservice : AuthService, private datasetService : DatasetService) {

  }
  dataset ;
  ngOnInit() {
    this.uploadMessage = "Uploading...."
    var data;
    this.datasetService.getDataset().subscribe(
      (result) =>{
        data = result;
        this.datasets = result.data.datasets
        console.log(data);
        setTimeout(()=>{
          this.spinner = false;
        },3000);

      }
    )
    console.log(data)
  }
  checkToken(){
    console.log("checking token")
    this.authservice.checkToken();
  }
  uploadImage(){
    console.log("uploading Image");
    this.statusFlag = true;
    this.onupload = true;
    setTimeout(function() {
      this.onupload = false;
    }, 3000);
    var Files = <HTMLInputElement>document.getElementById('file-select');
    this.file = Files.files;
    this.datasetService.uploadData(this.file).subscribe(
      (response)=>{
        // this.onupload = false;
        this.uploadMessage = "Upload Successful"
        this.file = null;

        console.log("Uploaded images, :D"+response);
      }
    );
  }
  printFiles(event:any){
    console.log("uploading file");
    var Files = <HTMLInputElement>document.getElementById('file-select');
    this.file = Files.files;
  }
}
