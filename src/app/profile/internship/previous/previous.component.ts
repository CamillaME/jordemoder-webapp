import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { InternshipService } from '../../../Shared/internship.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-previous',
  templateUrl: './previous.component.html',
  styleUrls: ['./previous.component.css'],
  providers: [InternshipService]
})
export class PreviousComponent implements OnInit {

  internships;

  constructor(private route: ActivatedRoute, private router: Router, private internshipService: InternshipService) { }

  getInternships() {
    let self = this;
    var db = firebase.firestore();

    firebase.auth().onAuthStateChanged(function (user) {
      db.collection("users").where("UserID", "==", user.uid)
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            self.internships = self.internshipService.getInternshipByID(doc.data().StudentNumber, self.route.snapshot.params["id"]).valueChanges();
          });
        });
    });
  }

  addNewNote(id) {
    this.router.navigateByUrl('ny-note' + "/praktik/" + id);
  }

  ngOnInit() {
    this.getInternships();
  }

}
