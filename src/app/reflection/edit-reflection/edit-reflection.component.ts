import { Component, OnInit } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { ReflectionService } from '../../Shared/reflection.service';
import { Reflection } from '../../Models/reflection.model';
import { Route, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-edit-reflection',
  templateUrl: './edit-reflection.component.html',
  styleUrls: ['../reflection.component.less'],
  providers: [ReflectionService]
})
export class EditReflectionComponent implements OnInit {

  reflections;

  date: string = "";
  reflectionCount: number = null;
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
  commentsOnReflection: string = "";
  commentsOnSeenActions: string = "";
  signatureAndDate: string = "";

  result: string = "";

  constructor(private db: AngularFirestore, private reflectionService: ReflectionService, private route: ActivatedRoute) {
    db.firestore.settings({ timestampsInSnapshots: true });

    this.reflections = this.reflectionService.getReflection(this.route.snapshot.params["id"]).valueChanges();
  }

  getInputValues() {
    this.reflections.forEach(item => {
      this.title = item[0].Title;
      this.reflectionCount = item[0].SheetNumber;
      this.birth = item[0].Birth;
      this.number = item[0].ShiftNumber;
      this.week = item[0].Week;
      this.date = item[0].Date;
      this.birthDescription = item[0].DescriptionOfTheCourseSituation;
      this.considerations = item[0].JdmAcademicConsiderationsForCareMm;
      this.individualGoals = item[0].IndividualGoals;
      this.reflectionText = item[0].ReflectionText;
      this.continueWith = item[0].WhatWillIContinueWith;
      this.literature = item[0].Literature;
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

  getTeacher() {
    let self = this;

    var db = firebase.firestore();

    firebase.auth().onAuthStateChanged(function (user) {
      db.collection("users").where("UserID", "==", user.uid)
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            db.collection("Internships").where("studentNumber", "==", doc.data().StudentNumber)
              .get()
              .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                  self.teacher = doc.data().InternshipTeacherName;
                });
              })
          });
        })
    });
  }

  getCommentsOnReflection() {
    let self = this;

    var db = firebase.firestore();

    firebase.auth().onAuthStateChanged(function (user) {
      db.collection("ReflectionSheet").where("UserID", "==", user.uid)
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            self.commentsOnReflection = doc.data().CommentsOnReflection;
          });
        })
    });
  }

  getCommentsOnSeenActions() {
    let self = this;

    var db = firebase.firestore();

    firebase.auth().onAuthStateChanged(function (user) {
      db.collection("ReflectionSheet").where("UserID", "==", user.uid)
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            self.commentsOnSeenActions = doc.data().CommentsOnSeenActions;
          });
        })
    });
  }

  getSignatureAndDate() {
    let self = this;

    var db = firebase.firestore();

    firebase.auth().onAuthStateChanged(function (user) {
      db.collection("ReflectionSheet").where("UserID", "==", user.uid)
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            self.signatureAndDate = doc.data().SignatureAndDate;
          });
        })
    });
  }

  onUpdate() {
    let reflection = {
      UserID: firebase.auth().currentUser.uid,
      Id: this.route.snapshot.params["id"],
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
      CommentsOnReflection: this.commentsOnReflection,
      CommentsOnSeenActions: this.commentsOnSeenActions,
      SignatureAndDate: this.signatureAndDate
    };

    this.reflectionService.updateReflection(this.route.snapshot.params["id"], reflection);

    this.result = "Refleksionsarket blevet opdateret...";
  }

  ngOnInit() {
    this.getInputValues();
    this.getFullName();
    this.getTerm();
    this.getTeacher();
    this.getCommentsOnReflection();
    this.getCommentsOnSeenActions();
    this.getSignatureAndDate();
    this.reflections = this.reflectionService.getReflection(this.route.snapshot.params["id"]).valueChanges();
  }

}
