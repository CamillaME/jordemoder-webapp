import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireDatabase, snapshotChanges } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { firestore } from 'firebase';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateInternshipComponent implements OnInit {

  term: string;
  place: string;
  street: string;
  zip: number;
  city: string;
  midwifeName: string;
  midwifePhoneNumber: string;
  midwifeEmail: string;
  internshipSupervisorName: string;
  internshipSupervisorPhone: string;
  internshipSupervisorEmail: string;
  internshipTeacherName: string;
  internshipTeacherPhone: string;
  internshipTeacherEmail: string;

  internshipsCol: AngularFirestoreCollection<any>;
  internships: Observable<any[]>;

  constructor(private db: AngularFirestore) {
    db.firestore.settings({ timestampsInSnapshots: true });
  }

  onsubmitIntership() {
  }

  ngOnInit() {
    this.internshipsCol = this.db.collection('Internships');
    this.internships = this.internshipsCol.valueChanges();
  }

}
