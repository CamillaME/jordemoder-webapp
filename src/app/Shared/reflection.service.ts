import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Reflection } from '../Models/reflection.model';
import { DocumentReference } from '@firebase/firestore-types';

// import * as firebase from 'firebase';

@Injectable()
export class ReflectionService {
    reflections: AngularFirestoreCollection<Reflection>;
    private reflectionDoc: AngularFirestoreDocument<Reflection>;

    constructor(private db: AngularFirestore) {
    }

    addReflection(
        userID: string,
        id: string,
        fullName: string,
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
        // const db = firebase.firestore();
        // const ref = db.collection('ReflectionSheet').doc();
        // id = ref.id;

        this.db.collection('ReflectionSheet').doc(id).set({
            "UserID": userID,
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
            "DescriptionOfTheCourseSituation": description,
            "JdmAcademicConsiderationsForCareMm": considerations,
            "IndividualGoals": individualGoals,
            "ReflectionText": reflection,
            "WhatWillIContinueWith": continueWith,
            "Literature": literature,
            "CommentsOnReflection": commentsOnReflection,
            "CommentsOnSeenActions": commentsOnActions,
            "SignatureAndDate": signatureAndDate
        });
    }

    updateReflection(
        userID: string,
        id: string,
        fullName: string,
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
        signatureAndDate: string) {

        this.db.collection('ReflectionSheet').doc(id).update({
            "UserID": userID,
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
            "DescriptionOfTheCourseSituation": description,
            "JdmAcademicConsiderationsForCareMm": considerations,
            "IndividualGoals": individualGoals,
            "ReflectionText": reflection,
            "WhatWillIContinueWith": continueWith,
            "Literature": literature,
            "CommentsOnReflection": commentsOnReflection,
            "CommentsOnSeenActions": commentsOnActions,
            "SignatureAndDate": signatureAndDate
        });

    }

    getReflection(id) {
        return this.db.collection('ReflectionSheet', ref => ref.where("Id", "==", id));
    }

    getReflectionByTermAndUserID(term, userID) {
        return this.db.collection('ReflectionSheet', ref => ref.where("Term", "==", term).where("UserID", "==", userID));
    }
}