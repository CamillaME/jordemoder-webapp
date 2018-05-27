import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { DocumentReference } from '@firebase/firestore-types';
import { Observable } from 'rxjs/Observable';
import { Calendar } from '../Models/calender.model';

import * as firebase from 'firebase/app';

@Injectable()
export class CalendarService {

    data = [];
    calendar;

    constructor(private db: AngularFirestore) {
        db.firestore.settings({ timestampsInSnapshots: true });
    }

    getCalendar(id) {
        return this.db.collection('Calendar', ref => ref.where("UserID", "==", id));
    }

    public getEvents(id): Observable<any> {
        let self = this;
        var db = firebase.firestore();

        this.calendar = this.getCalendar(id).valueChanges();

        this.calendar.subscribe(items => {
            items.forEach(item => {
                self.data.push(
                    {
                        title: item.WorkHours,
                        start: item.Date,
                        description: item.Shift,
                        color: "transparent"
                    });
            });
        });

        return Observable.of(this.data);
    }

    addToCalendar(id, calendar: Calendar) {
        this.db.collection("Calendar").doc(id).set(calendar);
    }
}