import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireDatabase } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { HttpModule } from '@angular/http';
import { FullCalendarModule } from 'ng-fullcalendar';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MyCalendarComponent } from './calendar/calendar.component';
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

import { AuthGuard } from './core/authGuard.service';
import { CreateUserComponent } from './login/create-user/create-user.component';
import { CreateInternshipComponent } from './profile/internship/create/create.component';
import { AddToCalendarComponent } from './calendar/add-to-calendar/add-to-calendar.component';
import { AddNoteComponent } from './reflection/notes/add-note/add-note.component';
import { AddCommentsComponent } from './reflection/add-comments/add-comments.component';

const routes: Routes = [
  { path: "", canActivate: [AuthGuard], component: MyCalendarComponent },
  { path: "udfyld-erfaringsskema", canActivate: [AuthGuard], component: FillOutSchemaComponent },
  { path: "tidligere-erfaringsskema", canActivate: [AuthGuard], component: PreviousSchemaComponent },
  { path: "udfyld-refleksionsark", canActivate: [AuthGuard], component: FillOutReflectionComponent },
  { path: "tidligere-refleksionsark", canActivate: [AuthGuard], component: PreviousReflectionComponent },
  { path: "noter", canActivate: [AuthGuard], component: NotesComponent },
  { path: "laeringsstatistik", canActivate: [AuthGuard], component: LearningComponent },
  { path: "praktik", canActivate: [AuthGuard], component: InternshipComponent },
  { path: "indstillinger", canActivate: [AuthGuard], component: SettingsComponent },
  { path: "hjaelp", canActivate: [AuthGuard], component: HelpComponent },
  { path: "min-profil", canActivate: [AuthGuard], component: ProfileComponent },
  { path: "eu-erfaringsskema", canActivate: [AuthGuard], component: EuSchemaComponent },
  { path: "login", component: LoginComponent },
  { path: "Opret-bruger", canActivate: [AuthGuard], component: CreateUserComponent },
  { path: "refleksionsark/:id", canActivate: [AuthGuard], component: EditReflectionComponent },
  { path: "refleksionsark", canActivate: [AuthGuard], component: ReflectionComponent },
  { path: "ny-vagt", canActivate: [AuthGuard], component: AddToCalendarComponent },
  { path: "ny-note/:type/:id", canActivate: [AuthGuard], component: AddNoteComponent },
  { path: "ny-kommentar/:id", canActivate: [AuthGuard], component: AddCommentsComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    MyCalendarComponent,
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
    TermComponent,
    CreateUserComponent,
    CreateInternshipComponent,
    AddToCalendarComponent,
    AddNoteComponent,
    AddCommentsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFirestoreModule,
    FormsModule,
    CoreModule,
    HttpModule,
    FullCalendarModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
