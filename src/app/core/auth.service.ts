import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap'

interface User {
  uid: string;
  email: string;
  displayName: string;
  password: string;
}

@Injectable()
export class AuthService {

  user: Observable<User>;

  constructor(private dbAuth: AngularFireAuth, private db: AngularFirestore, private router: Router) {
    this.user = this.dbAuth.authState.switchMap(user => {
      if (user) {
        return  this.db.doc<User>('users/${user.uid}').valueChanges()
      }else {
        return Observable.of(null)
      }
    })
   }

   private onLogin(user){
     firebase.auth().signInWithEmailAndPassword(user.email, user.password).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);    
     })
   }

   signOut(){
     firebase.auth().signOut().then(function(){
     }).catch(function(error){
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
     })
   }
}
