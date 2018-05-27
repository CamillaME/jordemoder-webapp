import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { FirebaseApp } from 'angularfire2';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { CalendarService } from '../../Shared/calendar.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-add-to-calendar',
  templateUrl: './add-to-calendar.component.html',
  styleUrls: ['./add-to-calendar.component.less'],
  providers: [CalendarService]
})
export class AddToCalendarComponent implements OnInit {

  constructor(private db: AngularFirestore, private calendarService: CalendarService) {
    db.firestore.settings({ timestampsInSnapshots: true });
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    var idBefore = this.db.createId();

    let calendar = {
      UserID: firebase.auth().currentUser.uid,
      ID: idBefore,
      Date: form.value.date,
      WorkHours: form.value.start + " - " + form.value.end,
      Shift: form.value.type
    }

    this.calendarService.addToCalendar(idBefore, calendar);
  }

}
