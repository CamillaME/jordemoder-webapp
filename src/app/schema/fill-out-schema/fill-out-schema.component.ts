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
  date4: Date;
  moreDates: string = "";
  moreDates2: string = "";
  moreDates3: string = "";
  moreDates4: string = "";
  textDatetest: string;
  newDate: string;
  newDate2: string;
  newDate3: string;
  newDate4: string;
  docData: string;
  profiles;
  studentNumber: number;
  docID: string;

  constructor(private db: AngularFirestore, private profileService: ProfileService, private schemaService: SchemaService, private route: ActivatedRoute) {
    db.firestore.settings({ timestampsInSnapshots: true });
  }

  experienceSchemaCol: AngularFirestoreCollection<any>;
  experienceSchemas: Observable<any[]>;
  
  OnAddDate(id, Dates) {
    this.docID = id;
    this.moreDates = Dates + " " + this.date.toString();
    this.db.collection('Experienceschema').doc(this.docID).update({
      'Modtagelseaffamilie': this.moreDates 
    }); 
  }

  OnAddDate2(id, Dates) {
    this.docID = id;
    this.moreDates2 = Dates + " " + this.date2.toString();
    this.db.collection('Experienceschema').doc(this.docID).update({
        'SamtaleOmOgPlanlaeggelseAfBarselsomsorg': this.moreDates2
    });
  }
  OnAddDate3(id, Dates) {
    this.docID = id;
    this.moreDates3 = Dates + " " + this.date3.toString();
    this.db.collection('Experienceschema').doc(this.docID).update({
        'VejledningIPersonligHygiejne': this.moreDates3
    });
  }

  OnAddDate4(id, Dates) {
    this.docID = id;
    this.moreDates4 = Dates + " " + this.date4.toString();
    this.db.collection('Experienceschema').doc(this.docID).update({
        'VejledningOmKvindesFysiologiskeForandringerpp': this.moreDates4
    });
  }
  // OnAddDate5(id, Dates) {
  //   this.docID = id;
  //   this.newDate5 = this.date5.toString();
  //   this.moreDates5 = Dates + " " + this.newDate5;
  //   this.db.collection('Experienceschema').doc(this.docID).update({
  //       'ObservationAfBristningOgEpisisotomi': this.moreDates5
  //   });
  // }
  // OnAddDate6(id, Dates) {
  //   this.docID = id;
  //   this.newDate6 = this.date6.toString();
  //   this.moreDates6 = Dates + " " + this.newDate6;
  //   this.db.collection('Experienceschema').doc(this.docID).update({
  //       'VejledningVedBristningOgEpisisotomi': this.moreDates6
  //   });
  // }
  // OnAddDate7(id, Dates) {
  //   this.docID = id;
  //   this.newDate7 = this.date7.toString();
  //   this.moreDates7 = Dates + " " + this.newDate7;
  //   this.db.collection('Experienceschema').doc(this.docID).update({
  //       'PalpationAfUterus': this.moreDates7
  //   });
  // }
  // OnAddDate8(id, Dates) {
  //   this.docID = id;
  //   this.newDate8 = this.date8.toString();
  //   this.moreDates8 = Dates + " " + this.newDate8;
  //   this.db.collection('Experienceschema').doc(this.docID).update({
  //       'ObservationOgVejledningOmkringLokkier': this.moreDates8
  //   });
  // }
  // OnAddDate9(id, Dates) {
  //   this.docID = id;
  //   this.newDate9 = this.date9.toString();
  //   this.moreDates9 = Dates + " " + this.newDate9;
  //   this.db.collection('Experienceschema').doc(this.docID).update({
  //       'Observartionafvandladning': this.moreDates9
  //   });
  // }
  // OnAddDate10(id, Dates) {
  //   this.docID = id;
  //   this.newDate10 = this.date10.toString();
  //   this.moreDates10 = Dates + " " + this.newDate10;
  //   this.db.collection('Experienceschema').doc(this.docID).update({
  //       'VejledningOmKvindesFysiologiskeForandringerpp': this.moreDates10
  //   });
  // }
  // OnAddDate11(id, Dates) {
  //   this.docID = id;
  //   this.newDate11 = this.date11.toString();
  //   this.moreDates11 = Dates + " " + this.newDate11;
  //   this.db.collection('Experienceschema').doc(this.docID).update({
  //       'VejledningOmKvindesFysiologiskeForandringerpp': this.moreDates11
  //   });
  // }
  // OnAddDate12(id, Dates) {
  //   this.docID = id;
  //   this.newDate12 = this.date12.toString();
  //   this.moreDates12 = Dates + " " + this.newDate12;
  //   this.db.collection('Experienceschema').doc(this.docID).update({
  //       'VejledningOmKvindesFysiologiskeForandringerpp': this.moreDates12
  //   });
  // }
  // OnAddDate13(id, Dates) {
  //   this.docID = id;
  //   this.newDate13 = this.date13.toString();
  //   this.moreDates13 = Dates + " " + this.newDate13;
  //   this.db.collection('Experienceschema').doc(this.docID).update({
  //       'VejledningOmKvindesFysiologiskeForandringerpp': this.moreDates13
  //   });
  // }
  // OnAddDate14(id, Dates) {
  //   this.docID = id;
  //   this.newDate14 = this.date14.toString();
  //   this.moreDates14 = Dates + " " + this.newDate14;
  //   this.db.collection('Experienceschema').doc(this.docID).update({
  //       'VejledningOmKvindesFysiologiskeForandringerpp': this.moreDates14
  //   });
  // }
  // OnAddDate15(id, Dates) {
  //   this.docID = id;
  //   this.newDate15 = this.date15.toString();
  //   this.moreDates15 = Dates + " " + this.newDate15;
  //   this.db.collection('Experienceschema').doc(this.docID).update({
  //       'VejledningOmKvindesFysiologiskeForandringerpp': this.moreDates15
  //   });
  // }
  // OnAddDate16(id, Dates) {
  //   this.docID = id;
  //   this.newDate16 = this.date16.toString();
  //   this.moreDates16 = Dates + " " + this.newDate16;
  //   this.db.collection('Experienceschema').doc(this.docID).update({
  //       'VejledningOmKvindesFysiologiskeForandringerpp': this.moreDates16
  //   });
  // }
  // OnAddDate17(id, Dates) {
  //   this.docID = id;
  //   this.newDate17 = this.date17.toString();
  //   this.moreDates17 = Dates + " " + this.newDate17;
  //   this.db.collection('Experienceschema').doc(this.docID).update({
  //       'VejledningOmKvindesFysiologiskeForandringerpp': this.moreDates17
  //   });
  // }
  // OnAddDate18(id, Dates) {
  //   this.docID = id;
  //   this.newDate18 = this.date18.toString();
  //   this.moreDates18 = Dates + " " + this.newDate18;
  //   this.db.collection('Experienceschema').doc(this.docID).update({
  //       'VejledningOmKvindesFysiologiskeForandringerpp': this.moreDates18
  //   });
  // }
  // OnAddDate19(id, Dates) {
  //   this.docID = id;
  //   this.newDate19 = this.date19.toString();
  //   this.moreDates19 = Dates + " " + this.newDate19;
  //   this.db.collection('Experienceschema').doc(this.docID).update({
  //       'VejledningOmKvindesFysiologiskeForandringerpp': this.moreDates19
  //   });
  // }
  // OnAddDate20(id, Dates) {
  //   this.docID = id;
  //   this.newDate20 = this.date20.toString();
  //   this.moreDates20 = Dates + " " + this.newDate20;
  //   this.db.collection('Experienceschema').doc(this.docID).update({
  //       'VejledningOmKvindesFysiologiskeForandringerpp': this.moreDates20
  //   });
  // }
  // OnAddDate21(id, Dates) {
  //   this.docID = id;
  //   this.newDate21 = this.date21.toString();
  //   this.moreDates4 = Dates + " " + this.newDate21;
  //   this.db.collection('Experienceschema').doc(this.docID).update({
  //       'VejledningOmKvindesFysiologiskeForandringerpp': this.moreDates21
  //   });
  // }
  // OnAddDate22(id, Dates) {
  //   this.docID = id;
  //   this.newDate22 = this.date22.toString();
  //   this.moreDates22 = Dates + " " + this.newDate22;
  //   this.db.collection('Experienceschema').doc(this.docID).update({
  //       'VejledningOmKvindesFysiologiskeForandringerpp': this.moreDates22
  //   });
  // }
  // OnAddDate23(id, Dates) {
  //   this.docID = id;
  //   this.newDate23 = this.date23.toString();
  //   this.moreDate23 = Dates + " " + this.newDate23;
  //   this.db.collection('Experienceschema').doc(this.docID).update({
  //       'VejledningOmKvindesFysiologiskeForandringerpp': this.moreDates23
  //   });
  // }
  // OnAddDate24(id, Dates) {
  //   this.docID = id;
  //   this.newDate24 = this.date24.toString();
  //   this.moreDates24 = Dates + " " + this.newDate24;
  //   this.db.collection('Experienceschema').doc(this.docID).update({
  //       'VejledningOmKvindesFysiologiskeForandringerpp': this.moreDates24
  //   });
  // }
  // OnAddDate25(id, Dates) {
  //   this.docID = id;
  //   this.newDate25 = this.date25.toString();
  //   this.moreDates25 = Dates + " " + this.newDate25;
  //   this.db.collection('Experienceschema').doc(this.docID).update({
  //       'VejledningOmKvindesFysiologiskeForandringerpp': this.moreDates25
  //   });
  // }
  // OnAddDate25(id, Dates) {
  //   this.docID = id;
  //   this.newDate25 = this.date25.toString();
  //   this.moreDates25 = Dates + " " + this.newDate25;
  //   this.db.collection('Experienceschema').doc(this.docID).update({
  //       'VejledningOmKvindesFysiologiskeForandringerpp': this.moreDates25
  //   });
  // }
  // OnAddDate26(id, Dates) {
  //   this.docID = id;
  //   this.newDate26 = this.date26.toString();
  //   this.moreDates26 = Dates + " " + this.newDate26;
  //   this.db.collection('Experienceschema').doc(this.docID).update({
  //       'VejledningOmKvindesFysiologiskeForandringerpp': this.moreDates26
  //   });
  // }
  // OnAddDate27(id, Dates) {
  //   this.docID = id;
  //   this.newDate27 = this.date27.toString();
  //   this.moreDates27 = Dates + " " + this.newDate27;
  //   this.db.collection('Experienceschema').doc(this.docID).update({
  //       'VejledningOmKvindesFysiologiskeForandringerpp': this.moreDates27
  //   });
  // }
  // OnAddDate28(id, Dates) {
  //   this.docID = id;
  //   this.newDate28 = this.date28.toString();
  //   this.moreDates28 = Dates + " " + this.newDate28;
  //   this.db.collection('Experienceschema').doc(this.docID).update({
  //       'VejledningOmKvindesFysiologiskeForandringerpp': this.moreDates28
  //   });
  // }
  // OnAddDate29(id, Dates) {
  //   this.docID = id;
  //   this.newDate29 = this.date29.toString();
  //   this.moreDates29 = Dates + " " + this.newDate29;
  //   this.db.collection('Experienceschema').doc(this.docID).update({
  //       'VejledningOmKvindesFysiologiskeForandringerpp': this.moreDates29
  //   });
  // }
  // OnAddDate30(id, Dates) {
  //   this.docID = id;
  //   this.newDate30 = this.date30.toString();
  //   this.moreDates30 = Dates + " " + this.newDate30;
  //   this.db.collection('Experienceschema').doc(this.docID).update({
  //       'VejledningOmKvindesFysiologiskeForandringerpp': this.moreDates30
  //   });
  // }
  // OnAddDate31(id, Dates) {
  //   this.docID = id;
  //   this.newDate31 = this.date31.toString();
  //   this.moreDates31 = Dates + " " + this.newDate31;
  //   this.db.collection('Experienceschema').doc(this.docID).update({
  //       'VejledningOmKvindesFysiologiskeForandringerpp': this.moreDates31
  //   });
  // }

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
