import { Component, OnInit } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { ReflectionService } from '../../Shared/reflection.service';
import { config } from '../../Shared/reflection.config';
import { Reflection } from '../../Models/reflection.model';
import { Router } from "@angular/router";
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-fill-out-reflection',
  templateUrl: './fill-out-reflection.component.html',
  styleUrls: ['../reflection.component.less'],
  providers: [ReflectionService]
})
export class FillOutReflectionComponent implements OnInit {

  date: string = "";
  reflectionCount: number = 1;
  title: string = "";
  teacher: string = "";
  reflectionText: string = "";
  birth: number = null;
  number: number = null;
  week: number = null;
  birthDescription: string = "";
  considerations: string = "";
  individualGoals: string = "";
  literature: string = "";
  continueWith: string = "";
  fullName: string = "";
  term: string = "";

  reflections: Observable<any[]>;

  constructor(private db: AngularFirestore, private reflectionService: ReflectionService, private router: Router) {
    db.firestore.settings({ timestampsInSnapshots: true });
  }

  getDate() {
    let today = "";
    if ((new Date().getMonth() + 1) < 10) {
      today = new Date().getFullYear() + "-" + 0 + (new Date().getMonth() + 1) + "-" + new Date().getDate();
    }
    else {
      today = new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate();
    }
    this.date = today.toString();
  }

  getReflectionNumber() {
    let self = this;
    var db = firebase.firestore();

    firebase.auth().onAuthStateChanged(function (user) {
      db.collection("ReflectionSheet").where("Term", "==", "4. semester").where("UserID", "==", user.uid)
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            self.reflectionCount = (querySnapshot.docs.length + 1);
          });
        })
    });
  }

  getFullName() {
    let self = this;

    var db = firebase.firestore();

    firebase.auth().onAuthStateChanged(function (user) {
      db.collection("users").where("UserID", "==", user.uid)
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            self.fullName = doc.data().FirstName + " " + doc.data().MiddelName + " " + doc.data().LastName;
          });
        })
    });
  }

  getTerm() {
    let self = this;

    var db = firebase.firestore();

    firebase.auth().onAuthStateChanged(function (user) {
      db.collection("users").where("UserID", "==", user.uid)
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            self.term = doc.data().Term;
          });
        })
    });
  }

  onSubmit() {
    var idBefore = this.db.createId();

    let reflection = {
      UserID: firebase.auth().currentUser.uid,
      Id: idBefore,
      FullName: this.fullName,
      Term: this.term,
      Title: this.title,
      Teacher: this.teacher,
      SheetNumber: this.reflectionCount,
      Birth: this.birth,
      ShiftNumber: this.number,
      Week: this.week,
      Date: this.date,
      DescriptionOfTheCourseSituation: this.birthDescription,
      JdmAcademicConsiderationsForCareMm: this.considerations,
      IndividualGoals: this.individualGoals,
      ReflectionText: this.reflectionText,
      WhatWillIContinueWith: this.continueWith,
      Literature: this.literature,
      CommentsOnReflection: "Ingen kommentarer endnu...",
      CommentsOnSeenActions: "Ingen kommentarer endnu...",
      SignatureAndDate: "12-02-2018 Jdm. Anne Mette Dahl Krøgh"
    };

    this.reflectionService.addReflection(idBefore, reflection);
    this.router.navigateByUrl('refleksionsark/' + idBefore);
  }

  ngOnInit() {
    this.getDate();
    this.getReflectionNumber();
    this.getFullName();
    this.getTerm();
    this.reflections = this.db.collection(config.collection_endpoint).valueChanges();
  }

}
