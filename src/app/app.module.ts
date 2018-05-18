import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SchemaComponent } from './schema/schema.component';
import { FillOutSchemaComponent } from './schema/fill-out-schema/fill-out-schema.component';
import { PreviousSchemaComponent } from './schema/previous-schema/previous-schema.component';
import { FillOutReflectionComponent } from './reflection/fill-out-reflection/fill-out-reflection.component';
import { NotesComponent } from './reflection/notes/notes.component';
import { ReflectionComponent } from './reflection/reflection.component';
import { ProfileComponent } from './profile/profile.component';
import { LearningComponent } from './profile/learning/learning.component';
import { InternshipComponent } from './profile/internship/internship.component';
import { SettingsComponent } from './profile/settings/settings.component';
import { HelpComponent } from './profile/help/help.component';
import { PreviousReflectionComponent } from './reflection/previous-reflection/previous-reflection.component';
import { EuSchemaComponent } from './schema/eu-schema/eu-schema.component';
import { LoginComponent } from './login/login.component';
import { EditReflectionComponent } from './reflection/edit-reflection/edit-reflection.component';
import { TermComponent } from './reflection/previous-reflection/term/term.component';

const routes: Routes = [
  { path: "", component: CalendarComponent },
  { path: "udfyld-erfaringsskema", component: FillOutSchemaComponent },
  { path: "tidligere-erfaringsskema", component: PreviousSchemaComponent },
  { path: "udfyld-refleksionsark", component: FillOutReflectionComponent },
  { path: "tidligere-refleksionsark", component: PreviousReflectionComponent },
  { path: "noter", component: NotesComponent },
  { path: "laeringsstatistik", component: LearningComponent },
  { path: "praktik", component: InternshipComponent },
  { path: "indstillinger", component: SettingsComponent },
  { path: "hjaelp", component: HelpComponent },
  { path: "min-profil", component: ProfileComponent },
  { path: "eu-erfaringsskema", component: EuSchemaComponent },
  { path: "login", component: LoginComponent },
  { path: "refleksionsark/:id", component: EditReflectionComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    MenuComponent,
    SchemaComponent,
    FillOutSchemaComponent,
    PreviousSchemaComponent,
    FillOutReflectionComponent,
    NotesComponent,
    ReflectionComponent,
    ProfileComponent,
    LearningComponent,
    InternshipComponent,
    SettingsComponent,
    HelpComponent,
    PreviousReflectionComponent,
    EuSchemaComponent,
    LoginComponent,
    EditReflectionComponent,
    TermComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    CoreModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
