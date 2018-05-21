import { Component, OnInit } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

  constructor(private db: AngularFirestore, private router: Router) {
    db.firestore.settings({ timestampsInSnapshots: true });
  }

  login: boolean;
  logout: boolean;

  teacher: boolean;

  schemaClass() {
    if (this.router.url.indexOf('/udfyld-erfaringsskema') > -1 || this.router.url.indexOf('/tidligere-erfaringsskema') > -1) {
      return "active";
    }
  }

  getTeacherStyle() {
    let self = this;
    var db = firebase.firestore();

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        db.collection("users").where("UserID", "==", user.uid)
          .get()
          .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
              if (doc.data().StudentNumber == null) {
                self.teacher = false;
              }
              else {
                self.teacher = true;
              }
            });
          });
      }
    });
  }

  reflectionClass() {
    if (this.router.url.indexOf('/udfyld-refleksionsark') > -1 ||
      this.router.url.indexOf('/tidligere-refleksionsark') > -1 ||
      this.router.url.indexOf('/noter') > -1) {
      return "active";
    }
  }

  profileClass() {
    if (this.router.url.indexOf('/min-profil') > -1 ||
      this.router.url.indexOf('/laeringsstatistik') > -1 ||
      this.router.url.indexOf('/praktik') > -1 ||
      this.router.url.indexOf('/indstillinger') > -1 ||
      this.router.url.indexOf('/hjaelp') > -1) {
      return "active";
    }
  }

  getLogInAndOut() {
    let self = this;

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        self.login = false;
        self.logout = true;
      }
      else {
        self.login = true;
        self.logout = false;
      }
    });
  }

  onLogOut() {
    firebase.auth().signOut();
  }

  ngOnInit() {
    this.getLogInAndOut();
    this.getTeacherStyle();
  }

}
