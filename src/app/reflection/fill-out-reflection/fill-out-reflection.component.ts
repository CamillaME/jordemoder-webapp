import { Component, OnInit } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { ReflectionService } from '../../Shared/reflection.service';
import { config } from '../../Shared/reflection.config';
import { Reflection } from '../../Models/reflection.model';
import { Router } from "@angular/router";

@Component({
  selector: 'app-fill-out-reflection',
  templateUrl: './fill-out-reflection.component.html',
  styleUrls: ['../reflection.component.less'],
  providers: [ReflectionService]
})
export class FillOutReflectionComponent implements OnInit {

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

    this.db.collection("ReflectionSheet", ref => ref.where("Term", "==", "4. semester")).ref.get().then(function (querySnapshot) {
      self.reflectionCount = (querySnapshot.docs.length + 1);
    });
  }

  onSubmit() {
    var idBefore = this.db.createId();

    let reflection = {
      UserID: "RandomUserID",
      Id: idBefore,
      FullName: "Julie Bang Larsen",
      Term: "4. semester",
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
      CommentsOnReflection: "Dette er en kommentar",
      CommentsOnSeenActions: "Dette er en kommentar",
      SignatureAndDate: "12-02-2018 Jdm. Anne Mette Dahl Krøgh"
    };

    this.reflectionService.addReflection(idBefore, reflection);
    this.router.navigateByUrl('refleksionsark/' + idBefore);
  }

  ngOnInit() {
    this.getDate();
    this.getReflectionNumber();
    this.reflections = this.db.collection(config.collection_endpoint).valueChanges();
  }

}
