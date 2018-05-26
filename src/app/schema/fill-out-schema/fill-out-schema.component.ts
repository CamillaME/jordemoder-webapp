import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, snapshotChanges } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Schema } from '../../Models/schema.model';
import { ProfileService } from '../../Shared/profile.service';
import { SchemaService } from '../../Shared/schema.service';
import { Observable } from 'rxjs/Observable';
import { Route, ActivatedRoute } from '@angular/router';

import * as firebase from 'firebase';
import { first } from 'rxjs/operator/first';

// export interface Experienceschema { name: string; dates: Date; }
// export interface ExperienceschemaId extends Experienceschema { id: string; }

@Component({
  selector: 'app-fill-out-schema',
  templateUrl: './fill-out-schema.component.html',
  styleUrls: ['./fill-out-schema.component.css'],
  providers: [ProfileService, SchemaService]
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
  docID: string;

  constructor(private db: AngularFirestore, private profileService: ProfileService, private schemaService: SchemaService, private route: ActivatedRoute) {
    db.firestore.settings({ timestampsInSnapshots: true });
  }

  experienceSchemaCol: AngularFirestoreCollection<any>;
  experienceSchemas: Observable<any[]>;
  
  OnAddDate(id) {
    this.docID = id;
    this.newDate = this.date.toString();
    this.moreDates = this.moreDates + " " + this.newDate;
    this.db.collection('Experienceschema').doc(this.docID).update({
      'Modtagelseaffamilie': this.moreDates 
    }); 
  }

  OnAddDate2(id) {
    this.docID = id;
    this.newDate2 = this.date2.toString();
    this.moreDates2 = this.moreDates2 + " " + this.newDate2;
    this.db.collection('Experienceschema').doc(this.docID).update({
        'SamtaleOmOgPlanlæggelseAfBarselsomsorg': this.moreDates2
    });
  }
  OnAddDate3(id) {
    this.docID = id;
    this.newDate3 = this.date3.toString();
    this.moreDates3 = this.moreDates3 + " " + this.newDate3;
    this.db.collection('Experienceschema').doc(this.docID).update({
        'VejledningIPersonligHygiejne': this.moreDates3
    });
  }

  ngOnInit() {
    let self = this;

    firebase.auth().onAuthStateChanged(function (user) {
      self.profiles = self.profileService.getProfile(user.uid).valueChanges();
      var studentNumber = self.profiles.studentNumber;
      self.profiles.forEach(item => {

        self.studentNumber = item[0].StudentNumber;
        console.log(self.studentNumber);
        self.experienceSchemas = self.db.collection('Experienceschema', ref => ref.where('StudentNumber', '==', self.studentNumber)).valueChanges();
        });
    });

    this.experienceSchemaCol = this.db.collection('Experienceschema');
    this.experienceSchemas = this.experienceSchemaCol.valueChanges();
  }

}
