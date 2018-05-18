import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
      if (this.auth.loggedin == true) {
        return this.router.navigate(['']);
      } else {
        return this.router.navigate(['login']);
      }
    //   const user = firebase.auth().currentUser;
    //   firebase.auth().onAuthStateChanged(function(user) {
    //       if(user != null ){
    //           this.router.navigate('');
    //       }
    //       else{
    //         this.router.navigate('login');
    //       }
    //   });
  }
}
