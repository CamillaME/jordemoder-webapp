import { Component, OnInit, Output } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { ReflectionService } from '../Shared/reflection.service';
import { Router } from "@angular/router";
import * as firebase from 'firebase/app';

import * as pdfMake from 'pdfmake/build/pdfmake.js';
import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-reflection',
  templateUrl: './reflection.component.html',
  styleUrls: ['./reflection.component.less'],
  providers: [ReflectionService]
})
export class ReflectionComponent implements OnInit {

  studentName: string;
  angleDown: boolean = false;
  angleRight: boolean = true;
  reflections;
  students;
  studentList = [];
  labelledBy: string;
  SheetNumber;
  commentOnReflection: string = "";
  commentSeenActions: string = "";

  constructor(private db: AngularFirestore, private reflectionService: ReflectionService, private router: Router) {
    db.firestore.settings({ timestampsInSnapshots: true });
  }

  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    let self = this;
    var db = firebase.firestore();

    firebase.auth().onAuthStateChanged(function (user) {
      self.students = self.reflectionService.getReflectionStudents(user.email).valueChanges();

      self.students.subscribe(items => {
        items.forEach(item => {

          db.collection("users").where("StudentNumber", "==", item.studentNumber)
            .get()
            .then(function (querySnapshot) {
              querySnapshot.forEach(function (doc) {
                self.studentList.push(
                  {
                    studentName: doc.data().FirstName + " " + doc.data().MiddelName + " " + doc.data().LastName,
                    studentNumber: item.studentNumber,
                    angleDown: false,
                    angleRight: true
                  }
                )
              });
            });
        });
        self.studentList;
      });
    });
  }

  getReflections(student) {
    let self = this;
    var db = firebase.firestore();

    this.studentList.forEach(item => {
      if (student == item.studentNumber) {
        item.angleDown = true;
        item.angleRight = false;
      }
      else {
        item.angleDown = false;
        item.angleRight = true;
      }
    });

    db.collection("users").where("StudentNumber", "==", student)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          self.reflections = self.reflectionService.getReflectionsByUserID(doc.data().UserID).valueChanges();
          self.angleDown = true;
          self.angleRight = false;

          self.getInputValues();
        });
      });
  }

  addCommentOnReflection(id) {
    this.reflectionService.updateCommentOnReflection(id, this.commentOnReflection);
  }

  addCommentOnSeenActions(id) {
    this.reflectionService.updateCommentOnSeenActions(id, this.commentSeenActions);
  }

  getInputValues() {
    let self = this;

    this.reflections.forEach(item => {
      self.commentOnReflection = item[0].CommentsOnReflection;
      self.commentSeenActions = item[0].CommentsOnSeenActions;
    });
  }
}
