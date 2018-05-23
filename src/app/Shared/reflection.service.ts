import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { config } from './reflection.config';
import { Reflection } from '../Models/reflection.model';
import { DocumentReference } from '@firebase/firestore-types';
import { Observable } from 'rxjs/Observable';

import * as firebase from 'firebase/app';

// import * as firebase from 'firebase';

@Injectable()
export class ReflectionService {
    reflections: AngularFirestoreCollection<Reflection>;
    private reflectionDoc: AngularFirestoreDocument<Reflection>;

    constructor(private db: AngularFirestore) {
        db.firestore.settings({ timestampsInSnapshots: true });

        this.reflections = db.collection<Reflection>(config.collection_endpoint);
    }

    addReflection(id, reflection: Reflection) {
        this.reflections.doc(id).set(reflection);
    }

    updateReflection(id, reflection: Reflection) {
        this.reflections.doc(id).update(reflection);
    }

    updateSheetNumber(number) {
        var collectionReference = this.db.collection('ReflectionSheet');
        var query = collectionReference;

        let self = this;

        query.ref.get().then(function (querySnapshot) {
            querySnapshot.forEach(function (documentSnapshot) {
                var data = documentSnapshot.data();

                if (data.SheetNumber > number) {
                    self.db.collection("ReflectionSheet").doc(data.Id).update({ SheetNumber: data.SheetNumber - 1 });
                }
            });
        });
    }

    deleteReflection(id) {
        this.reflections.doc(id).delete();
    }

    getReflection(id) {
        return this.db.collection('ReflectionSheet', ref => ref.where("Id", "==", id));
    }

    getReflectionByTermAndUserID(term, userID) {
        return this.db.collection('ReflectionSheet', ref => ref.where("Term", "==", term).where("UserID", "==", userID).orderBy("SheetNumber"));
    }

    getReflectionStudents(email) {
        return this.db.collection("Internships", ref => ref.where("InternshipTeacherEmail", "==", email));
    }

    getReflectionsByUserID(userID) {
        return this.db.collection('ReflectionSheet', ref => ref.where("UserID", "==", userID).orderBy("SheetNumber"));
    }

    updateCommentOnReflection(id, text) {
        this.db.collection("ReflectionSheet").doc(id).update({ "CommentsOnReflection": text });
    }

    updateCommentOnSeenActions(id, text) {
        this.db.collection("ReflectionSheet").doc(id).update({ "CommentsOnSeenActions": text });
    }
}