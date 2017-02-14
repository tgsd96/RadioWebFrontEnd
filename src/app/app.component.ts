import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'RadioWeb!';
  public loggedin: boolean;
  constructor(private router: Router){}
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if(localStorage.getItem("currentUser")){
      this.loggedin = true;
      this.router.navigate(['/dashboard']);
    }
    else{
      this.loggedin = false;
    }
  }
    

  logout(){
    this.loggedin = false;
    //this.authService.logout();
    localStorage.removeItem("currentUser");
    this.router.navigate(['/']);
  }
}
