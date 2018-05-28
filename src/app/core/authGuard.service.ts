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
      var user = firebase.auth().currentUser;
      if (user) {
        return this.router.navigateByUrl('');
      } else {
        return this.router.navigateByUrl('login');
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
