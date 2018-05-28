import { Component, OnInit } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { NoteService } from '../../Shared/note.service';
import { Router } from "@angular/router";

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.less'],
  providers: [NoteService]
})
export class NotesComponent implements OnInit {

  notes;

  constructor(private db: AngularFirestore, private noteService: NoteService, private router: Router) {
    db.firestore.settings({ timestampsInSnapshots: true });
  }

  getNotes() {
    this.notes = this.noteService.getNotes(firebase.auth().currentUser.uid).valueChanges();
  }

  getSotedNotes(schema, internship, calendar) {
    if (schema == true) {
      this.notes = this.noteService.getNoteBySchema(firebase.auth().currentUser.uid).valueChanges();
    }

    if (internship == true) {
      this.notes = this.noteService.getNoteByInternship(firebase.auth().currentUser.uid).valueChanges();
    }

    if (calendar == true) {
      this.notes = this.noteService.getNoteByCalendar(firebase.auth().currentUser.uid).valueChanges();
    }

    if (schema == false && internship == false && calendar == false) {
      this.getNotes();
    }
  }

  ngOnInit() {
    this.getNotes();
  }

}
