import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  email: string;
  password: string;

  constructor() { }

  onCreateUser(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  }

  onLogin(email, password) {
    const credential = firebase.auth.EmailAuthProvider.credential(email, password);
    return firebase.auth().signInWithEmailAndPassword(email, password);
    // firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   console.log(errorCode);
    //   console.log(errorMessage);
    // });
  }

  signOut() {
    firebase.auth().signOut().then(function () {
    }).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
  }
}
