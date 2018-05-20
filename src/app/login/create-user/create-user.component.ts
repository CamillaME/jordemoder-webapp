import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../core/auth.service';
import { AngularFireDatabase, snapshotChanges } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { firestore } from 'firebase';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
  providers: [AuthService]
})
export class CreateUserComponent implements OnInit {
  email: string;
  password: string;
  firstName: string = "";
  middelName: string = "";
  lastName: string = "";
  phoneNumber: string = "";
  studentNumber: number = null;
  street: string = "";
  zip: number = null;
  city: string = "";
  ID: string;
  term: string;

  usersCol: AngularFirestoreCollection<any>;
  users: Observable<any[]>;

  constructor(private authService: AuthService, private db: AngularFirestore) {
    db.firestore.settings({ timestampsInSnapshots: true });
  }

  onCreate(form: NgForm) {
    // const email = form.value.email;
    // const password = form.value.password;
    this.authService.onCreateUser(this.email, this.password);
    const docID = this.db.createId();
    this.ID = firebase.auth().currentUser.uid;
    this.db.collection('users').doc(docID).set({
      "Email": this.email,
      "UserID": this.ID,
      "FirstName": this.firstName,
      "MiddelName": this.middelName,
      "LastName": this.lastName,
      "PhoneNumber": this.phoneNumber,
      "StudentNumber": this.studentNumber,
      "Street": this.street,
      "Zip": this.zip,
      "City": this.city,
      "Term": this.term
    });
  }

  ngOnInit() {
    this.usersCol = this.db.collection('users');
    this.users = this.usersCol.valueChanges();
  }

}
