import { Injectable, Inject } from '@angular/core';

import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = JSON.parse(sessionStorage.getItem('loginUserInfo'));
    if (currentUser) {
        return true;
    }


    // not logged in so redirect to login page with the return url
    this.router.navigate(['/signin']);
    return false;
  }
}
