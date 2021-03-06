import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { FirebaseApp } from 'angularfire2';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { ProfileService } from '../Shared/profile.service';
import * as firebase from 'firebase/app';
import { AngularFireStorage } from 'angularfire2/storage';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less'],
  providers: [AuthService, ProfileService]
})
export class ProfileComponent implements OnInit {

  profiles;
  imagePath: string = "assets/images/placeholder.jpg";
  downloadURL;
  studentNumber: number;
  internship: string;

  constructor(private db: AngularFirestore, private profileService: ProfileService, public auth: AuthService, private afStorage: AngularFireStorage) {
    db.firestore.settings({ timestampsInSnapshots: true });
  }

  ngOnInit() {
    let self = this;
    var db = firebase.firestore();

    firebase.auth().onAuthStateChanged(function (user) {
      self.profiles = self.profileService.getProfile(user.uid).valueChanges();

      self.profiles.forEach(item => {
        var storage = firebase.storage();
        var ref = storage.ref();

        self.studentNumber = item[0].StudentNumber;

        db.collection("Internships").where("studentNumber", "==", self.studentNumber).where("Term", "==", item[0].Term)
          .get()
          .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
              self.internship = doc.data().Place;
            });
          });

        if (item[0].ImagePath == "") {
          self.imagePath = self.imagePath;
        }
        else {
          self.imagePath = "";
          self.downloadURL = self.afStorage.ref(item[0].ImagePath).getDownloadURL();
        }
      });
    });
  }
}
