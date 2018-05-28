import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Note } from '../Models/note.model';

import * as firebase from 'firebase/app';

@Injectable()
export class NoteService {
    constructor(private db: AngularFirestore) {
        db.firestore.settings({ timestampsInSnapshots: true });
    }

    addNote(id, note: Note) {
        this.db.collection("Notes").doc(id).set(note);
    }
}