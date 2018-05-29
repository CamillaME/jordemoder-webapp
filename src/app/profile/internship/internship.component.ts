import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { InternshipService } from '../../Shared/internship.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.css'],
  providers: [InternshipService]
})
export class InternshipComponent implements OnInit {

  internships;
  isTeacher: boolean;
  isStudent: boolean;
  previousInternships;

  constructor(private route: ActivatedRoute, private router: Router, private internshipService: InternshipService) { }

  ngOnInit() {
    this.getInternships();
  }

  getInternships() {
    let self = this;
    var db = firebase.firestore();

    firebase.auth().onAuthStateChanged(function (user) {
      db.collection("users").where("UserID", "==", user.uid)
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            self.internships = self.internshipService.getInternship(doc.data().StudentNumber, doc.data().Term).valueChanges();

            if (doc.data().StudentNumber == null) {
              self.isTeacher = true;
              self.isStudent = false;
            }
            else {
              self.isTeacher = false;
              self.isStudent = true;
            }

            self.previousInternships = self.internshipService.getInternships(doc.data().StudentNumber, doc.data().Term).valueChanges();
          });
        });
    });
  }

  addNewNote(id) {
    this.router.navigateByUrl('ny-note' + "/praktik/" + id);
  }

}
