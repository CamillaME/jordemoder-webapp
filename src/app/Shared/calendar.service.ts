import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { DocumentReference } from '@firebase/firestore-types';
import { Observable } from 'rxjs/Observable';

import * as firebase from 'firebase/app';

@Injectable()
export class CalendarService {
    constructor(private db: AngularFirestore) {
        db.firestore.settings({ timestampsInSnapshots: true });
    }

    public getEvents(): Observable<any> {
        let data: any = [{
            title: 'Test',
            start: '2018-05-24'
        }];
        // let data: any = [{
        //     title: 'All Day Event',
        //     start: yearMonth + '-01'
        // },
        // {
        //     title: 'Long Event',
        //     start: yearMonth + '-07',
        //     end: yearMonth + '-10'
        // },
        // {
        //     id: 999,
        //     title: 'Repeating Event',
        //     start: yearMonth + '-09T16:00:00'
        // },
        // {
        //     id: 999,
        //     title: 'Repeating Event',
        //     start: yearMonth + '-16T16:00:00'
        // },
        // {
        //     title: 'Conference',
        //     start: yearMonth + '-11',
        //     end: yearMonth + '-13'
        // },
        // {
        //     title: 'Meeting',
        //     start: yearMonth + '-12T10:30:00',
        //     end: yearMonth + '-12T12:30:00'
        // },
        // {
        //     title: 'Lunch',
        //     start: yearMonth + '-12T12:00:00'
        // },
        // {
        //     title: 'Meeting',
        //     start: yearMonth + '-12T14:30:00'
        // },
        // {
        //     title: 'Happy Hour',
        //     start: yearMonth + '-12T17:30:00'
        // },
        // {
        //     title: 'Dinner',
        //     start: yearMonth + '-12T20:00:00'
        // },
        // {
        //     title: 'Birthday Party',
        //     start: yearMonth + '-13T07:00:00'
        // },
        // {
        //     title: 'Click for Google',
        //     url: 'http://google.com/',
        //     start: yearMonth + '-28'
        // }];
        return Observable.of(data);
    }
}