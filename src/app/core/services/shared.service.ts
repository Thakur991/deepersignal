import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private oAuth: any;
  private loginUserInfo: any;
  selectedFreelancerPortfolio: any;
  private subject = new Subject<any>();
  currentMessage = this.subject.asObservable();
  constructor(
    private router: Router
  ) { 
   
  }

  setOauth(sData) {
    if (sData) {
      this.oAuth = JSON.parse(JSON.stringify(sData));
      sessionStorage.setItem('oAuth', JSON.stringify(sData));
    } else {
      this.oAuth = null;
      sessionStorage.removeItem('oAuth');
    }
  }

  getOauth(key?) {
    if (!this.oAuth && sessionStorage.getItem('oAuth')) {
      this.oAuth = JSON.parse(sessionStorage.getItem('oAuth'));
    }

    if (key) {
      return this.oAuth ? this.oAuth[key] : null;
    }
    return this.oAuth;
  }

  setLoginUserInfo(sData) {
    if (sData) {
      this.loginUserInfo = JSON.parse(JSON.stringify(sData));
      sessionStorage.setItem('loginUserInfo', JSON.stringify(sData));
    } else {
      this.loginUserInfo = null;
      sessionStorage.removeItem('loginUserInfo');
    }
  }

  getLoginUserInfo(key?) {
    if (!this.loginUserInfo && sessionStorage.getItem('loginUserInfo')) {
      this.loginUserInfo = JSON.parse(sessionStorage.getItem('loginUserInfo'));
    }
    if (key) {
      return this.loginUserInfo ? this.loginUserInfo[key] : null;
    }
    return this.loginUserInfo;
  }

  logout() {
    this.setLoginUserInfo(null);
    this.setOauth(null);
    sessionStorage.clear();
    this.router.navigate(['signin']);
  }



}
