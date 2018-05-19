import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { config } from './reflection.config';
import { Reflection } from '../Models/reflection.model';
import { DocumentReference } from '@firebase/firestore-types';
import { Observable } from 'rxjs/Observable';

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

    getReflection(id) {
        return this.db.collection('ReflectionSheet', ref => ref.where("Id", "==", id));
    }

    getReflectionByTermAndUserID(term, userID) {
        return this.db.collection('ReflectionSheet', ref => ref.where("Term", "==", term).where("UserID", "==", userID).orderBy("SheetNumber"));
    }
}