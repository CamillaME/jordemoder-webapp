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
  date5: Date;
  date6: Date;
  date7: Date;
  date8: Date;
  date9: Date;
  date10: Date;
  date11: Date;
  date12: Date;
  date13: Date;
  date14: Date;
  date15: Date;
  date16: Date;
  date17: Date;
  date18: Date;
  date19: Date;
  date20: Date;
  date21: Date;
  date22: Date;
  date23: Date;
  date24: Date;
  date25: Date;
  date26: Date;
  date27: Date;
  date28: Date;
  date29: Date;
  date30: Date;
  date31: Date;
  date32: Date;
  date33: Date;
  date34: Date;
  date35: Date;
  date36: Date;
  date37: Date;
  date38: Date;
  date39: Date;
  date40: Date;
  moreDates: string = "";
  moreDates2: string = "";
  moreDates3: string = "";
  moreDates4: string = "";
  moreDates5: string = "";
  moreDates6: string = "";
  moreDates7: string = "";
  moreDates8: string = "";
  moreDates9: string = "";
  moreDates10: string = "";
  moreDates11: string = "";
  moreDates12: string = "";
  moreDates13: string = "";
  moreDates14: string = "";
  moreDates15: string = "";
  moreDates16: string = "";
  moreDates17: string = "";
  moreDates18: string = "";
  moreDates19: string = "";
  moreDates20: string = "";
  moreDates21: string = "";
  moreDates22: string = "";
  moreDates23: string = "";
  moreDates24: string = "";
  moreDates25: string = "";
  moreDates26: string = "";
  moreDates27: string = "";
  moreDates28: string = "";
  moreDates29: string = "";
  moreDates30: string = "";
  moreDates31: string = "";
  moreDates32: string = "";
  moreDates33: string = "";
  moreDates34: string = "";
  moreDates35: string = "";
  moreDates36: string = "";
  moreDates37: string = "";
  moreDates38: string = "";
  moreDates39: string = "";
  moreDates40: string = "";
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
  OnAddDate5(id, Dates) {
    this.docID = id;
    this.moreDates5 = Dates + " " + this.date5.toString();
    this.db.collection('Experienceschema').doc(this.docID).update({
        'ObservationAfBristningOgEpisisotomi': this.moreDates5
    });
  }
  OnAddDate6(id, Dates) {
    this.docID = id;
    this.moreDates6 = Dates + " " + this.date6.toString();
    this.db.collection('Experienceschema').doc(this.docID).update({
        'VejledningVedBristningOgEpisisotomi': this.moreDates6
    });
  }
  OnAddDate7(id, Dates) {
    this.docID = id;
    this.moreDates7 = Dates + " " + this.date7.toString();
    this.db.collection('Experienceschema').doc(this.docID).update({
        'PalpationAfUterus': this.moreDates7
    });
  }
  OnAddDate8(id, Dates) {
    this.docID = id;
    this.moreDates8 = Dates + " " + this.date8.toString();
    this.db.collection('Experienceschema').doc(this.docID).update({
        'ObservationOgVejledningOmkringLokkier': this.moreDates8
    });
  }
  OnAddDate9(id, Dates) {
    this.docID = id;
    this.moreDates9 = Dates + " " + this.date9.toString();
    this.db.collection('Experienceschema').doc(this.docID).update({
        'Observartionafvandladning': this.moreDates9
    });
  }
  OnAddDate10(id, Dates) {
    this.docID = id;
    this.moreDates10 = Dates + " " + this.date10.toString();
    this.db.collection('Experienceschema').doc(this.docID).update({
        'GiveOrienteringOgVejledningIKnibeoevelser': this.moreDates10
    });
  }
  OnAddDate11(id, Dates) {
    this.docID = id;
    this.moreDates11 = Dates + " " + this.date11.toString();
    this.db.collection('Experienceschema').doc(this.docID).update({
        'VejledningIAmmeteknik': this.moreDates11
    });
  }
  OnAddDate12(id, Dates) {
    this.docID = id;
    this.moreDates12 = Dates + " " + this.date12.toString();
    this.db.collection('Experienceschema').doc(this.docID).update({
        'ObservationAfOgVejledeVedBrystspaending': this.moreDates12
    });
  }
  OnAddDate13(id, Dates) {
    this.docID = id;
    this.moreDates13 = Dates + " " + this.date13.toString();
    this.db.collection('Experienceschema').doc(this.docID).update({
        'ForebyggelseOgPlejeAfOemmePapiller': this.moreDates13
    });
  }
  OnAddDate14(id, Dates) {
    this.docID = id;
    this.moreDates14 = Dates + " " + this.date14.toString();
    this.db.collection('Experienceschema').doc(this.docID).update({
        'ForebyggelseOgPlejeAfPapillerMedFissurer': this.moreDates14
    });
  }
  OnAddDate15(id, Dates) {
    this.docID = id;
    this.moreDates15 = Dates + " " + this.date15.toString();
    this.db.collection('Experienceschema').doc(this.docID).update({
        'VejledningObservationOmkringMastitis': this.moreDates15
    });
  }
  OnAddDate16(id, Dates) {
    this.docID = id;
    this.moreDates16 = Dates + " " + this.date16.toString();
    this.db.collection('Experienceschema').doc(this.docID).update({
        'VejledningOmSuttebriks': this.moreDates16
    });
  }
  OnAddDate17(id, Dates) {
    this.docID = id;
    this.moreDates17 = Dates + " " + this.date17.toString();
    this.db.collection('Experienceschema').doc(this.docID).update({
        'VejledningOmGiveMaelkPaaKop': this.moreDates17
    });
  }
  OnAddDate18(id, Dates) {
    this.docID = id;
    this.moreDates18 = Dates + " " + this.date18.toString();
    this.db.collection('Experienceschema').doc(this.docID).update({
        'VejledningIUdmalkningManueltBrystpumpeHaandpumpe': this.moreDates18
    });
  }
  OnAddDate19(id, Dates) {
    this.docID = id;
    this.moreDates19 = Dates + " " + this.date19.toString();
    this.db.collection('Experienceschema').doc(this.docID).update({
        'AmningAfGemelli': this.moreDates19
    });
  }
  OnAddDate20(id, Dates) {
    this.docID = id;
    this.moreDates20 = Dates + " " + this.date20.toString();
    this.db.collection('Experienceschema').doc(this.docID).update({
        'VejledeMorDerIkkeOenskerAtAmme': this.moreDates20
    });
  }
  OnAddDate21(id, Dates) {
    this.docID = id;
    this.moreDates4 = Dates + " " + this.date21.toString();
    this.db.collection('Experienceschema').doc(this.docID).update({
        'BrystopereredeKvinderOgAmning': this.moreDates21
    });
  }
  OnAddDate22(id, Dates) {
    this.docID = id;
    this.moreDates22 = Dates + " " + this.date22.toString();
    this.db.collection('Experienceschema').doc(this.docID).update({
        'HypoHypergalakti': this.moreDates22
    });
  }
  OnAddDate23(id, Dates) {
    this.docID = id;
    this.moreDates23 = Dates + " " + this.date23.toString();
    this.db.collection('Experienceschema').doc(this.docID).update({
        'VejledeIVitaminTilskudTilBarnet': this.moreDates23
    });
  }
  OnAddDate24(id, Dates) {
    this.docID = id;
    this.moreDates24 = Dates + " " + this.date24.toString();
    this.db.collection('Experienceschema').doc(this.docID).update({
        'VejledeIDenNormaleBarselspsyke': this.moreDates24
    });
  }
  OnAddDate25(id, Dates) {
    this.docID = id;
    this.moreDates25 = Dates + " " + this.date25.toString();
    this.db.collection('Experienceschema').doc(this.docID).update({
        'VejledeISoeskendeJalousi': this.moreDates25
    });
  }
  OnAddDate32(id, Dates) {
    this.docID = id;
    this.moreDates32 = Dates + " " + this.date32.toString();
    this.db.collection('Experienceschema').doc(this.docID).update({
        'SamtaleOmFamiliensNyeStruktur': this.moreDates32
    });
  }
  OnAddDate26(id, Dates) {
    this.docID = id;
    this.moreDates26 = Dates + " " + this.date26.toString();
    this.db.collection('Experienceschema').doc(this.docID).update({
        'SamtaleOmSexOgSamlivEfterFoedslenHerunderPraevention': this.moreDates26
    });
  }
  OnAddDate27(id, Dates) {
    this.docID = id;
    this.moreDates27 = Dates + " " + this.date27.toString();
    this.db.collection('Experienceschema').doc(this.docID).update({
        'VejledningOmBarnetsBehovSignaler': this.moreDates27
    });
  }
  OnAddDate28(id, Dates) {
    this.docID = id;
    this.moreDates28 = Dates + " " + this.date28.toString();
    this.db.collection('Experienceschema').doc(this.docID).update({
        'VejledningVedrForaeldreBarnRelation': this.moreDates28
    });
  }
  OnAddDate29(id, Dates) {
    this.docID = id;
    this.moreDates29 = Dates + " " + this.date29.toString();
    this.db.collection('Experienceschema').doc(this.docID).update({
        'ObservationAfOgOmsorgForDetNyfoedteBarn': this.moreDates29
    });
  }
  OnAddDate30(id, Dates) {
    this.docID = id;
    this.moreDates30 = Dates + " " + this.date30.toString();
    this.db.collection('Experienceschema').doc(this.docID).update({
        'VejledningOmkringSpaedbarnspleje': this.moreDates30
    });
  }
  OnAddDate31(id, Dates) {
    this.docID = id;
    this.moreDates31 = Dates + " " + this.date31.toString();
    this.db.collection('Experienceschema').doc(this.docID).update({
        'AffoeringOgVandladning': this.moreDates31
    });
  }
  OnAddDate33(id, Dates) {
    this.docID = id;
    this.moreDates33 = Dates + " " + this.date33.toString();
    this.db.collection('Experienceschema').doc(this.docID).update({
        'LejringAfBarnVedSoevn': this.moreDates33
    });
  }
  OnAddDate34(id, Dates) {
    this.docID = id;
    this.moreDates34 = Dates + " " + this.date34.toString();
    this.db.collection('Experienceschema').doc(this.docID).update({
        'VejledningOmPKUBlodproeve': this.moreDates34
    });
  }
  OnAddDate35(id, Dates) {
    this.docID = id;
    this.moreDates35 = Dates + " " + this.date35.toString();
    this.db.collection('Experienceschema').doc(this.docID).update({
        'TilrettelaeggeOgUdfoerePKU': this.moreDates35
    });
  }
  OnAddDate36(id, Dates) {
    this.docID = id;
    this.moreDates36 = Dates + " " + this.date36.toString();
    this.db.collection('Experienceschema').doc(this.docID).update({
        'ObservationAfOgVejledningIEmnerSomIcterusFoedselssvulstCephalhaematomOsv': this.moreDates36
    });
  }
  OnAddDate37(id, Dates) {
    this.docID = id;
    this.moreDates37 = Dates + " " + this.date37.toString();
    this.db.collection('Experienceschema').doc(this.docID).update({
        'RapportVedVagtskifte': this.moreDates37
    });
  }
  OnAddDate38(id, Dates) {
    this.docID = id;
    this.moreDates38 = Dates + " " + this.date38.toString();
    this.db.collection('Experienceschema').doc(this.docID).update({
        'AfholdeUdskrivningssamtaler': this.moreDates38
    });
  }
  OnAddDate39(id, Dates) {
    this.docID = id;
    this.moreDates39 = Dates + " " + this.date39.toString();
    this.db.collection('Experienceschema').doc(this.docID).update({
        'Journalfoering': this.moreDates39
    });
  }
  OnAddDate40(id, Dates) {
    this.docID = id;
    this.moreDates40 = Dates + " " + this.date40.toString();
    this.db.collection('Experienceschema').doc(this.docID).update({
        'HygiejneFxSterilteknik': this.moreDates40
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
