import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authservice: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    var user = firebase.auth().currentUser;

    if (user) {
      return true;
    }
    else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
