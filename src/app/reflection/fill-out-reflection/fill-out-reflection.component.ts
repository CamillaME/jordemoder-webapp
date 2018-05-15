import { Component, OnInit } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { ReflectionService } from '../../Shared/reflection.service';
import { Reflection } from '../../Models/reflection.model';
import { Router } from "@angular/router";

@Component({
  selector: 'app-fill-out-reflection',
  templateUrl: './fill-out-reflection.component.html',
  styleUrls: ['../reflection.component.less'],
  providers: [ReflectionService]
})
export class FillOutReflectionComponent implements OnInit {

  date: string = "";
  reflectionCount: number = null;
  title: string = "";
  teacher: string = "";
  reflection: string = "";
  birth: number = null;
  number: number = null;
  week: number = null;
  birthDescription: string = "";
  considerations: string = "";
  individualGoals: string = "";
  literature: string = "";
  continueWith: string = "";

  reflectionCol: AngularFirestoreCollection<any>;
  reflections: Observable<any[]>;

  constructor(private db: AngularFirestore, private reflectionService: ReflectionService, private router: Router) {
    db.firestore.settings({ timestampsInSnapshots: true });
  }

  getDate() {
    let today = "";
    if ((new Date().getMonth() + 1) < 10) {
      today = new Date().getFullYear() + "-" + 0 + (new Date().getMonth() + 1) + "-" + new Date().getDate();
    }
    else {
      today = new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate();
    }
    this.date = today.toString();
  }

  getReflectionNumber() {
    let self = this;

    this.db.collection("ReflectionSheet", ref => ref.where("Term", "==", "4. semester")).ref.get().then(function (querySnapshot) {
      self.reflectionCount = (querySnapshot.docs.length + 1);
    });
  }

  onSubmit() {
    var idBefore = this.db.createId();

    this.reflectionService.addReflection(
      "RandomUserID",
      idBefore,
      "Julie Bang Larsen",
      "4. semester",
      this.title,
      this.teacher,
      this.reflectionCount,
      this.birth,
      this.number,
      this.week,
      this.date,
      this.birthDescription,
      this.considerations,
      this.individualGoals,
      this.reflection,
      this.continueWith,
      this.literature,
      "Dette er en kommentar",
      "Dette er en kommentar",
      "12-02-2018 Jdm. Anne Mette Dahl Krøgh");

    this.router.navigateByUrl('refleksionsark/' + idBefore);
  }

  ngOnInit() {
    this.getDate();
    this.getReflectionNumber();
    this.reflectionCol = this.db.collection('ReflectionSheet');
    this.reflections = this.reflectionCol.valueChanges();
  }

}
