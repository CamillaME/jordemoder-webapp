import { Component, OnInit } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { ReflectionService } from '../../Shared/reflection.service';
import { Reflection } from '../../Models/reflection.model';
import { Route, ActivatedRoute } from '@angular/router';

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
  reflection: string = "";
  birth: number = null;
  number: number = null;
  week: number = null;
  birthDescription: string = "";
  considerations: string = "";
  individualGoals: string = "";
  literature: string = "";
  continueWith: string = "";

  constructor(private db: AngularFirestore, private reflectionService: ReflectionService, private route: ActivatedRoute) {
    db.firestore.settings({ timestampsInSnapshots: true });

    this.reflections = this.reflectionService.getReflection(this.route.snapshot.params["id"]).valueChanges();
  }

  getInputValues() {
    this.reflections.forEach(item => {
      this.title = item[0].Title;
      this.teacher = item[0].Teacher;
      this.reflectionCount = item[0].SheetNumber;
      this.birth = item[0].Birth;
      this.number = item[0].ShiftNumber;
      this.week = item[0].Week;
      this.date = item[0].Date;
      this.birthDescription = item[0].DescriptionOfTheCourseSituation;
      this.considerations = item[0].JdmAcademicConsiderationsForCareMm;
      this.individualGoals = item[0].IndividualGoals;
      this.reflection = item[0].ReflectionText;
      this.continueWith = item[0].WhatWillIContinueWith;
      this.literature = item[0].Literature;
    });
  }

  onUpdate() {
    this.reflectionService.updateReflection(
      this.route.snapshot.params["id"],
      "Julie Bang Larsen",
      "4. semester",
      this.title,
      this.teacher,
      this.reflectionCount,
      this.birth,
      this.number,
      this.week,
      this.date,
      this.birthDescription,
      this.considerations,
      this.individualGoals,
      this.reflection,
      this.continueWith,
      this.literature,
      "Dette er en kommentar",
      "Dette er en kommentar",
      "12-02-2018 Jdm. Anne Mette Dahl Krøgh");
  }

  ngOnInit() {
    this.reflections = this.reflectionService.getReflection(this.route.snapshot.params["id"]).valueChanges();
    this.getInputValues();
  }

}
