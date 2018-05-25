import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, snapshotChanges } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Schema } from '../../Models/schema.model';
import { ProfileService } from '../../Shared/profile.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';

import * as firebase from 'firebase';
import { first } from 'rxjs/operator/first';

// export interface Experienceschema { name: string; dates: Date; }
// export interface ExperienceschemaId extends Experienceschema { id: string; }

@Component({
  selector: 'app-fill-out-schema',
  templateUrl: './fill-out-schema.component.html',
  styleUrls: ['./fill-out-schema.component.css'],
  providers: [ProfileService]
})

export class FillOutSchemaComponent implements OnInit {

  date: Date;
  date2: Date;
  date3: Date;
  moreDates: string = "";
  moreDates2: string = "";
  moreDates3: string = "";
  textDatetest: string;
  newDate: string;
  newDate2: string;
  newDate3: string;
  docData: string;
  profiles;
  studentNumber: number;

  constructor(private db: AngularFirestore, private profileService: ProfileService) {
    db.firestore.settings({ timestampsInSnapshots: true });

    // this.experienceSchemaCol = db.collection<Experienceschema>('expSchema');
    // this.experienceSchemas = this.experienceSchemaCol.snapshotChanges().map(actions => {
    //   return actions.map(a => {
    //     const data = a.payload.doc.data() as Experienceschema;
    //     const id = a.payload.doc.id;
    //     return { id, ...data };
    //   });
    // });
  }

  experienceSchemaCol: AngularFirestoreCollection<any>;
  experienceSchemas: Observable<any[]>;

  OnAddDate() {
    this.newDate = this.date.toString();
    this.moreDates = this.moreDates + " " + this.newDate;
    this.db.collection('Experienceschema').doc('first').update({
        'Modtagelseaffamilie': this.moreDates
    });
  }
  OnAddDate2() {
    this.newDate2 = this.date2.toString();
    this.moreDates2 = this.moreDates2 + " " + this.newDate2;
    this.db.collection('Experienceschema').doc('first').update({
        'SamtaleOmOgPlanlæggelseAfBarselsomsorg': this.moreDates2
    });
  }
  OnAddDate3() {
    this.newDate3 = this.date3.toString();
    this.moreDates3 = this.moreDates3 + " " + this.newDate3;
    this.db.collection('Experienceschema').doc('first').update({
        'VejledningIPersonligHygiejne': this.moreDates3
    });
  }

  // GetExperienceDoc(StudentNumber) {
  //   let self = this;
  //   var db = firebase.firestore();

  //   firebase.auth().onAuthStateChanged(function (user) {
  //     self.profiles = self.profileService.getProfile(user.uid).valueChanges();

  //     self.profiles.forEach(item => {

  //       self.studentNumber = item[0].StudentNumber;
  //       this.db.collection('Experienceschema', ref =>
  //       ref.where('StudentNumber', '==', self.studentNumber).limit(1)).valueChanges().flatMap(result => result);
  //       console.log(self.studentNumber);
  //     });
  //   });
  // }

  ngOnInit() {
    let self = this;
    // var db = firebase.firestore();

    firebase.auth().onAuthStateChanged(function (user) {
      self.profiles = self.profileService.getProfile(user.uid).valueChanges();
      var studentNumber = self.profiles.studentNumber;
      self.profiles.forEach(item => {

        self.studentNumber = item[0].StudentNumber;
        console.log(self.studentNumber);
        self.experienceSchemas = self.db.collection('Experienceschema', ref => ref.where('StudentNumber', '==', self.studentNumber)).valueChanges();
        var docID = self.experienceSchemas
        console.log(self.experienceSchemas);
        // this.db.collection('Experienceschema').where('StudentNumber', '==', self.studentNumber).get().then(function (doc) {
        // console.log(doc.data());
      });
    });

    this.experienceSchemaCol = this.db.collection('Experienceschema');
    this.experienceSchemas = this.experienceSchemaCol.valueChanges();
  }

}
