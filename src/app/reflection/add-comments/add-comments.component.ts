import { Component, OnInit, Output, Input, EventEmitter, ViewChild } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { ReflectionService } from '../../Shared/reflection.service';
import { Router, ActivatedRoute } from "@angular/router";
import * as firebase from 'firebase/app';

import * as pdfMake from 'pdfmake/build/pdfmake.js';
import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-add-comments',
  templateUrl: './add-comments.component.html',
  styleUrls: ['../reflection.component.less'],
  providers: [ReflectionService]
})
export class AddCommentsComponent implements OnInit {

  studentName: string;
  angleDown: boolean = false;
  angleRight: boolean = true;
  reflections;
  students;
  studentList = [];
  labelledBy: string;
  SheetNumber;
  commentOnReflection;
  commentSeenActions;
  teacher: string = "";

  constructor(private db: AngularFirestore, private reflectionService: ReflectionService, private router: Router, private route: ActivatedRoute) {
    db.firestore.settings({ timestampsInSnapshots: true });
  }

  ngOnInit() {
    this.getStudents();
    this.getTeacher();
    this.getReflections();
    this.getInputValues();
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

  getReflections() {
    let self = this;
    var db = firebase.firestore();

    self.reflections = self.reflectionService.getReflection(this.route.snapshot.params["id"]).valueChanges();
  }

  getTeacher() {
    let self = this;
    var db = firebase.firestore();

    firebase.auth().onAuthStateChanged(function (user) {
      db.collection("users").where("UserID", "==", user.uid)
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            self.teacher = doc.data().FirstName + " " + doc.data().MiddelName + " " + doc.data().LastName;
          });
        });
    });
  }

  addCommentOnReflection(id) {
    let date = new Date();

    let today = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();

    this.reflectionService.updateCommentOnReflection(id, this.commentOnReflection, today + " Jdm. " + this.teacher);


  }

  addCommentOnSeenActions(id) {
    let date = new Date();

    let today = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();

    this.reflectionService.updateCommentOnSeenActions(id, this.commentSeenActions, today + " Jdm. " + this.teacher);
  }

  getInputValues() {
    let self = this;

    this.reflections.forEach(item => {
      self.commentOnReflection = item[0].CommentsOnReflection;
      self.commentSeenActions = item[0].CommentsOnSeenActions;
    });
  }

  onDownload(isPrint, title, id, sheetNumber, fullName, term, teacher, birth, shiftNumber, week, date, descriptionOfTheCourseSituation, jdmAcademicConsiderationsForCareMm, individualGoals, reflectionText, whatWillIContinueWith, literature, commentsOnReflection, commentsOnSeenActions, signatureAndDate) {
    var docDefinition = {
      content: [
        {
          text: [
            { text: "Refleksionsark ", style: 'header' },
            { text: sheetNumber + " - " + title, style: 'title' },
          ],
          margin: [0, 0, 0, 20]
        },
        {
          text: [
            { text: "Jordemoder studerende   ", bold: true },
            { text: fullName + ", " + term, italics: true }
          ],
          margin: [0, 0, 0, 20]
        },
        { canvas: [{ type: 'line', x1: 0, y1: -20, x2: 595 - 2 * 40, y2: -20, lineWidth: 2 }] },
        {
          columns: [
            {
              width: '40%',
              text: [
                { text: "Underviser   ", bold: true },
                { text: teacher },
              ]
            },
            {
              width: '30%',
              text: [
                { text: "Refleksion nr.   ", bold: true },
                { text: sheetNumber },
              ]
            },
            {
              width: '30%',
              text: [
                { text: "Fødsel   ", bold: true },
                { text: birth }
              ],
              margin: [0, 0, 0, 20]
            }
          ]
        },
        { canvas: [{ type: 'line', x1: 0, y1: -20, x2: 595 - 2 * 40, y2: -20, lineWidth: 1 }] },
        {
          columns: [
            {
              width: '40%',
              text: [
                { text: "Vagt nr.   ", bold: true },
                { text: shiftNumber }
              ]
            },
            {
              width: '30%',
              text: [
                { text: "Uge i perioden   ", bold: true },
                { text: week }
              ]
            },
            {
              width: '30%',
              text: [
                { text: "Dato   ", bold: true },
                { text: date.substring(date.lastIndexOf('-') + 1) + "." + date.substring(date.indexOf('-') + 1, date.lastIndexOf('-')) + "." + date.substring(0, date.indexOf('-')) }
              ],
              margin: [0, 0, 0, 20]
            }
          ]
        },
        { canvas: [{ type: 'line', x1: 0, y1: -20, x2: 595 - 2 * 40, y2: -20, lineWidth: 1 }] },
        {
          text: [
            { text: "Beskrivelse af forløbet / situationen ", bold: true },
            { text: "(kvinden/familien)" },
          ],
          margin: [0, 20, 0, 0]
        },
        {
          text: [
            { text: descriptionOfTheCourseSituation }
          ],
        },
        {
          text: [
            { text: "Jdm.faglige overvejelser for omsorgen / observationer / handlingsforslag ", bold: true }
          ],
          margin: [0, 20, 0, 0]
        },
        {
          text: [
            { text: jdmAcademicConsiderationsForCareMm }
          ],
        },
        {
          text: [
            { text: "Individuelle mål ", bold: true }
          ],
          margin: [0, 20, 0, 0]
        },
        {
          text: [
            { text: individualGoals }
          ],
        },
        {
          text: [
            { text: "Refleksion ", bold: true }
          ],
          margin: [0, 20, 0, 0]
        },
        {
          text: [
            { text: reflectionText }
          ],
        },
        {
          text: [
            { text: "Hvad vil jeg arbejde videre med ", bold: true }
          ],
          margin: [0, 20, 0, 0]
        },
        {
          text: [
            { text: whatWillIContinueWith }
          ],
        },
        {
          text: [
            { text: "Litteratur ", bold: true }
          ],
          margin: [0, 20, 0, 0]
        },
        {
          text: [
            { text: literature }
          ],
        },
        {
          text: [
            { text: "Kommentarer på refleksion ", bold: true }
          ],
          margin: [0, 20, 0, 0]
        },
        {
          text: [
            { text: commentsOnReflection }
          ],
        },
        {
          text: [
            { text: "Kommentarer på sete handlinger ", bold: true }
          ],
          margin: [0, 20, 0, 0]
        },
        {
          text: [
            { text: commentsOnSeenActions }
          ],
        },
        {
          text: [
            { text: "Underskrift + dato ", bold: true }
          ],
          margin: [0, 20, 0, 0]
        },
        {
          text: [
            { text: signatureAndDate }
          ],
        }
      ],
      styles: {
        header: {
          fontSize: 18,
          color: '#41BAAE',
        },
        title: {
          fontSize: 18,
          color: '#A0A09F'
        },
      }
    };

    if (isPrint == false) {
      pdfMake.createPdf(docDefinition).download("Refleksionsark " + sheetNumber + " - " + title).open();
    }
    else {
      pdfMake.createPdf(docDefinition).print();
    }
  }

}
