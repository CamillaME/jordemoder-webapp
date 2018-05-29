import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

@Injectable()
export class InternshipService {
    constructor(private db: AngularFirestore) {
        db.firestore.settings({ timestampsInSnapshots: true });
    }

    getInternship(studentNumber, term) {
        return this.db.collection('Internships', ref => ref.where("studentNumber", "==", studentNumber).where("Term", "==", term));
    }

    getInternships(studentNumber, term) {
        return this.db.collection('Internships', ref => ref.where("studentNumber", "==", studentNumber).where("Term", "<", term));
    }
}