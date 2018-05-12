import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Reflection } from '../Models/reflection.model';
import { DocumentReference } from '@firebase/firestore-types';

import * as firebase from 'firebase';

@Injectable()
export class ReflectionService {
    reflections: AngularFirestoreCollection<Reflection>;
    private reflectionDoc: AngularFirestoreDocument<Reflection>;

    constructor(private db: AngularFirestore) {
    }

    addReflection(title: string, teacher: string, reflectionNumber: string, birth: string, number: number, week: string, date: string, description: string, considerations: string, individualGoals: string, reflection: string, literature: string) {
        const db = firebase.firestore();
        const ref = db.collection('ReflectionSheet').doc();
        const id = ref.id;

        this.db.collection('ReflectionSheet').doc(id).set({
            "Id": id,
            "Title": title,
            "Teacher": teacher,
            "SheetNumber": reflectionNumber,
            "Birth": birth,
            "ShiftNumber": number,
            "Week": week,
            "Date": date,
            "Description of the course/situation": description,
            "Jdm. academic considerations for care mm.": considerations,
            "Individual goals": individualGoals,
            "ReflectionText": reflection,
            "Literature": literature
        });
    }
}