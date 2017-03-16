import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashview',
  templateUrl: './dashview.component.html',
  styleUrls: ['./dashview.component.css']
})
export class DashviewComponent implements OnInit {
  datasets = [{
    "id" : 1,
    "title" : "data 1"
  },
  {
    "id" : 2,
    "title" : "data 2"
  }
  ];
  clickedChild : boolean = false;
  constructor() { }

  ngOnInit() {
  }
}
