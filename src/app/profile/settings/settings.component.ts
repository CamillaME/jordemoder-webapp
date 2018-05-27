import { Component, OnInit } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { ProfileService } from '../../Shared/profile.service';
import * as firebase from 'firebase/app';
import { NgForm } from "@angular/forms";
import { AngularFireStorage } from 'angularfire2/storage';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.less'],
  providers: [ProfileService]
})
export class SettingsComponent implements OnInit {

  profiles;
  studentNumber: number = null;
  firstName: string = "";
  middleName: string = "";
  lastName: string = "";
  phoneNumber: string = "";
  email: string = "";
  street: string = "";
  zip: number = null;
  city: string = "";
  term: string = "";
  imagePath: string = "";

  selectedFiles = "";
  fileName: string = "";

  result: string = "";

  constructor(private db: AngularFirestore, private profileService: ProfileService, private afStorage: AngularFireStorage) {
    db.firestore.settings({ timestampsInSnapshots: true });

    let self = this;
    firebase.auth().onAuthStateChanged(function (user) {
      self.profiles = self.profileService.getProfile(user.uid).valueChanges();
    });
  }

  upload(event) {
    this.selectedFiles = event.target.files[0];
    this.fileName = event.target.files[0].name;
  }

  getInputValues() {
    this.profiles.forEach(item => {
      this.studentNumber = item[0].StudentNumber;
      this.firstName = item[0].FirstName;
      this.middleName = item[0].MiddelName;
      this.lastName = item[0].LastName;
      this.phoneNumber = item[0].PhoneNumber;
      this.email = item[0].Email;
      this.street = item[0].Street;
      this.zip = item[0].Zip;
      this.city = item[0].City;
      this.term = item[0].Term;
    });
  }

  ngOnInit() {
    let self = this;
    firebase.auth().onAuthStateChanged(function (user) {
      self.profiles = self.profileService.getProfile(user.uid).valueChanges();
    });
    this.getInputValues();
  }

  onSubmit(form: NgForm) {
    let self = this;
    var db = firebase.firestore();

    firebase.auth().onAuthStateChanged(function (user) {
      db.collection("users").where("UserID", "==", user.uid)
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            let profile = {
              UserID: user.uid,
              StudentNumber: doc.data().StudentNumber,
              FirstName: form.value.firstName,
              MiddelName: form.value.middleName,
              LastName: form.value.lastName,
              Street: form.value.street,
              Zip: form.value.zip,
              City: form.value.city,
              PhoneNumber: form.value.phoneNumber,
              Email: form.value.email,
              ImagePath: self.selectedFiles != "" ? ('/images/' + user.uid + '/' + self.fileName) : doc.data().ImagePath,
              Term: doc.data().Term
            }

            self.profileService.updateSettings(doc.id, profile);

            if (self.selectedFiles != "") {
              self.afStorage.upload(('/images/' + user.uid + '/' + self.fileName), self.selectedFiles);
            }
          });
        })
    });

    this.result = "Indstillingerne blevet opdateret...";
  }
}
