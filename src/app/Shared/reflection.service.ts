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

    addReflection(fullName: string,
        term: string,
        title: string,
        teacher: string,
        reflectionNumber: number,
        birth: number,
        number: number,
        week: number,
        date: string,
        description: string,
        considerations: string,
        individualGoals: string,
        reflection: string,
        continueWith: string,
        literature: string,
        commentsOnReflection: string,
        commentsOnActions: string,
        signatureAndDate: string
    ) {
        const db = firebase.firestore();
        const ref = db.collection('ReflectionSheet').doc();
        const id = ref.id;

        this.db.collection('ReflectionSheet').doc(id).set({
            "Id": id,
            "FullName": fullName,
            "Term": term,
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
            "What will I continue with?": continueWith,
            "Literature": literature,
            "Comments on reflection": commentsOnReflection,
            "Comments on seen actions": commentsOnActions,
            "Signature + date": signatureAndDate
        });
    }
}