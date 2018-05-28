import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { FirebaseApp } from 'angularfire2';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { NoteService } from '../../../Shared/note.service';
import { Route, Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css'],
  providers: [NoteService]
})
export class AddNoteComponent implements OnInit {

  result: string = "";

  constructor(private db: AngularFirestore, private noteService: NoteService, private route: ActivatedRoute, private router: Router) {
    db.firestore.settings({ timestampsInSnapshots: true });
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    var idBefore = this.db.createId();

    var today = new Date();

    let note = {
      Date: today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate(),
      ExperienceSchemaID: this.route.snapshot.params["type"] == "erfaringsskema" ? this.route.snapshot.params["id"] : "",
      CalendarID: this.route.snapshot.params["type"] == "kalender" ? this.route.snapshot.params["id"] : "",
      IntershipID: this.route.snapshot.params["type"] == "praktik" ? this.route.snapshot.params["id"] : "",
      Headline: form.value.headline,
      ID: idBefore,
      Text: form.value.text,
      UserID: firebase.auth().currentUser.uid,
    }

    this.noteService.addNote(idBefore, note);

    let self = this;

    if (this.route.snapshot.params["type"] == "kalender") {
      this.result = "Noten blev oprettet. Om et øjeblik sendes du tilbage til vagtplanen...";

      setTimeout(function () {
        self.router.navigateByUrl('/');
      }, 3000);
    }

    if (this.route.snapshot.params["type"] == "erfaringsskema") {
      this.result = "Noten blev oprettet. Om et øjeblik sendes du tilbage til erfaringsskemaet...";

      setTimeout(function () {
        self.router.navigateByUrl('udfyld-erfaringsskema');
      }, 3000);
    }

    if (this.route.snapshot.params["type"] == "praktik") {
      this.result = "Noten blev oprettet. Om et øjeblik sendes du tilbage til praktikforløbet...";

      setTimeout(function () {
        self.router.navigateByUrl('praktik');
      }, 3000);
    }
  }

}
