import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { CalendarComponent } from './profile/calendar/calendar.component';
import { SchemaComponent } from './profile/schema/schema.component';
import { InternshipComponent } from './profile/internship/internship.component';
import { MenuComponent } from './menu/menu.component';
import { LearningComponent } from './profile/learning/learning.component';
import { PreviousInternshipComponent } from './profile/previous-internship/previous-internship.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    CalendarComponent,
    SchemaComponent,
    InternshipComponent,
    MenuComponent,
    LearningComponent,
    PreviousInternshipComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
