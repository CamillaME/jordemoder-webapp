import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { CalendarService } from '../Shared/calendar.service';
import * as firebase from 'firebase/app';
import { Router } from "@angular/router";

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
  constructor(private calendarService: CalendarService, private router: Router) {
    // this.loadevents();
  }

  ngOnInit() {
    let self = this;

    firebase.auth().onAuthStateChanged(function (user) {
      self.calendarService.getEvents(user.uid).subscribe(data => {
        self.calendarOptions = {
          editable: false,
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
              titleFormat: 'MMMM YYYY',
              // other view-specific options here
            },
          },
          eventAfterRender: function (event, element) {
            element.find('.fc-title').html("<div class='clock'>" + element.find('.fc-title').html().replace("-", "-<br/>") + "</div>").prepend("<div class='circle'></div>").append("<div class='shift'>" + event.description + "</div>");
            // element.find('.fc-title').prepend("<div class='circle'></div>").append("<div class='shift'>" + event.description + "</div>");
          }
        };
      });
    });
  }

  addToCalendar() {
    this.router.navigateByUrl('ny-vagt');
  }
}
