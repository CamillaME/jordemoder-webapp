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

  studentNumber: number;
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
    const docID = this.db.createId();
    this.db.collection('Internships').doc(docID).set({
      "studentNumber": this.studentNumber,
      "Term": this.term,
      "Place": this.place,
      "Street": this.street,
      "Zip": this.zip,
      "City": this.city,
      "MidwifeName": this.midwifeName,
      "MidwifePhoneNumber": this.midwifePhoneNumber,
      "MidwifeEmail": this.midwifeEmail,
      "InternshipSupervisorName": this.internshipSupervisorName,
      "InternshipSupervisorPhone": this.internshipSupervisorPhone,
      "InternshipSupervisorEmail": this.internshipSupervisorEmail,
      "InternshipTeacherName": this.internshipTeacherName,
      "InternshipTeacherPhone": this.internshipTeacherPhone,
      "InternshipTeacherEmail": this.internshipTeacherEmail
    });
  }

  ngOnInit() {
    this.internshipsCol = this.db.collection('Internships');
    this.internships = this.internshipsCol.valueChanges();
  }

}
