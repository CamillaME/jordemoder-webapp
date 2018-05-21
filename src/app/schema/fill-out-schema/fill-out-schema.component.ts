import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, snapshotChanges } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import * as firebase from 'firebase';

// export interface Experienceschema { name: string; dates: Date; }
// export interface ExperienceschemaId extends Experienceschema { id: string; }

@Component({
  selector: 'app-fill-out-schema',
  templateUrl: './fill-out-schema.component.html',
  styleUrls: ['./fill-out-schema.component.css'],
})

export class FillOutSchemaComponent implements OnInit {

  date: Date;
  textDatetest: string;

  constructor(private db: AngularFirestore) {
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
    this.db.collection('Experienceschema').doc('first').set({
      'test': [{
        'Date': this.date
      }]
    });
  }
  OnAddDate2() {
    this.db.collection('Experienceschema').doc('first').set({
      'test2': [{
        'Date': this.date
      }]
    });
  }
  OnAddDate3() {
    this.db.collection('Experienceschema').doc('first').set({
      'test3': [{
        'Date': this.date
      }]
    });
  }

  OnAddTextDate() {
    this.db.collection('Experienceschema').doc('first').set({
      'test4': this.textDatetest
    });
  }

  ngOnInit() {
    this.experienceSchemaCol = this.db.collection('Experienceschema');
    this.experienceSchemas = this.experienceSchemaCol.valueChanges();
  }

}
