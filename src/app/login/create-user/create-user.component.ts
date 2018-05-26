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
  term: string = "";

  usersCol: AngularFirestoreCollection<any>;
  users: Observable<any[]>;

  constructor(private authService: AuthService, private db: AngularFirestore) {
    db.firestore.settings({ timestampsInSnapshots: true });
  }

  onCreate(form: NgForm) {
    let self = this;
    // const email = form.value.email;
    // const password = form.value.password;
    const ExperienceschemaID = this.db.createId();
    this.authService.onCreateUser(this.email, this.password);
    const docID = this.db.createId();
    // this.ID = firebase.auth().currentUser.uid;

    firebase.auth().signInWithEmailAndPassword(this.email, this.password);
    
    if (self.studentNumber != null) {
      self.db.collection('Experienceschema').doc(ExperienceschemaID).set({
        "id": ExperienceschemaID,
        "StudentNumber": self.studentNumber
      });
    };
    
    

    firebase.auth().onAuthStateChanged(function (user) {
      self.db.collection('users').doc(docID).set({
        "Email": self.email,
        "UserID": user.uid,
        "FirstName": self.firstName,
        "MiddelName": self.middelName,
        "LastName": self.lastName,
        "PhoneNumber": self.phoneNumber,
        "StudentNumber": self.studentNumber,
        "Street": self.street,
        "Zip": self.zip,
        "City": self.city,
        "Term": self.term.length == 1 ? self.term + ". semester" : self.term,
        "ImagePath": ""
      });
    });
  }

  ngOnInit() {
    this.usersCol = this.db.collection('users');
    this.users = this.usersCol.valueChanges();
  }

}
