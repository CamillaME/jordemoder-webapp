import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { CalendarService } from '../Shared/calendar.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.less'],
  providers: [CalendarService]
})
export class MyCalendarComponent implements OnInit {

  calendarOptions: Options;
  events;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  constructor(private calendarService: CalendarService) {
    // this.loadevents();
  }

  ngOnInit() {
    let self = this;

    firebase.auth().onAuthStateChanged(function (user) {
      self.calendarService.getEvents(user.uid).subscribe(data => {
        self.calendarOptions = {
          editable: true,
          eventLimit: false,
          header: {
            left: '',
            center: 'prev, title, next',
            right: 'list',
          },
          locale: 'Da',
          events: data,
          columnFormat: 'dddd',
          views: {
            month: { // name of view
              titleFormat: 'MMMM YYYY',
              // other view-specific options here
            }
          },
        };
      });
    });
  }

  // loadevents() {
  //   let self = this;

  //   firebase.auth().onAuthStateChanged(function (user) {
  //     self.calendarService.getEvents(user.uid).subscribe(data => {
  //       self.events = data;
  //     });
  //   });
  // }
}
