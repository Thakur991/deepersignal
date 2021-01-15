import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from "src/app/core/services/api.service"
import { SharedService } from "src/app/core/services/shared.service"
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
 

  loginForm: FormGroup 
  constructor(private formBuilder: FormBuilder, private _apiService: ApiService, private _SharedService: SharedService, private _router:Router) { }

  ngOnInit(): void {
  	this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
        password: ['', [Validators.minLength(6), Validators.maxLength(12)]]
    });
  }

  login(){
  	if(!this.loginForm.valid){
  		this.loginForm.markAllAsTouched();
  	    return;
  	}

  	this._apiService.login(this.loginForm.value).subscribe(res=>{
      sessionStorage.setItem('token', res.token)
  		this._SharedService.setLoginUserInfo(res);
      if(res.role == 'Admin'){
        this._router.navigate(['/user'])
      }else{
        this._router.navigate(['/dashboard'])
      }  
  	}, err=>{
  		console.log(err,"err")
  	})
  }

}
