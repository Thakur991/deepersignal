import { Component } from '@angular/core';
import { SharedService } from "./core/services/shared.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-material-auth-ui'
  userAvailble: any;
  constructor(private SharedService: SharedService){
     this.userAvailble = sessionStorage.getItem('token') ? true : false;
  }

  logout(){
  	this.SharedService.logout();
  }
}
