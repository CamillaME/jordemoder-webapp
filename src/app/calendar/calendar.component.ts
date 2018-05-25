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
    this.calendarService.getEvents().subscribe(data => {
      this.calendarOptions = {
        editable: true,
        eventLimit: false,
        header: {
          left: '',
          center: 'prev, title, next',
          right: '',
        },
        locale: 'Da',
        events: data,
        columnFormat: 'dddd',
        views: {
          month: { // name of view
            titleFormat: 'MMMM YYYY'
            // other view-specific options here
          }
        }
      };
    });
  }

  // loadevents() {
  //   this.calendarService.getEvents().subscribe(data => {
  //     this.events = data;
  //   });
  // }
}
