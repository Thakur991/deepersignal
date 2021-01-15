import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from "src/app/core/services/api.service"
import { SharedService } from "src/app/core/services/shared.service"
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class layoutComponent implements OnInit {

  public userAvailble: any;

  constructor(
    private SharedService: SharedService,
    public ApiService: ApiService,
  ) {
   
  }
  public ngOnInit() {
    this.userAvailble = sessionStorage.getItem('token') ? true : false;
  }



}
