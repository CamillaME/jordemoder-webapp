import { Component, OnInit } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { ReflectionService } from '../../Shared/reflection.service';
import { Reflection } from '../../Models/reflection.model';

@Component({
  selector: 'app-fill-out-reflection',
  templateUrl: './fill-out-reflection.component.html',
  styleUrls: ['./fill-out-reflection.component.less'],
  providers: [ReflectionService]
})
export class FillOutReflectionComponent implements OnInit {

  date: string;
  reflectionCount: string;
  title: string;
  teacher: string;
  reflection: string;
  birth: string;
  number: number;
  week: string;
  description: string;
  considerations: string;
  individualGoals: string;
  literature: string

  reflectionCol: AngularFirestoreCollection<any>;
  reflections: Observable<any[]>;

  constructor(private db: AngularFirestore, private reflectionService: ReflectionService) {
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

    this.db.collection("ReflectionSheet").ref.get().then(function (querySnapshot) {
      self.reflectionCount = (querySnapshot.docs.length + 1) + "/13";
    });
  }

  onSubmit() {
    // this.reflectionService.addReflection();
    this.reflectionService.addReflection(
      this.title,
      this.teacher,
      this.reflectionCount,
      this.birth,
      this.number,
      this.week,
      this.date,
      this.description,
      this.considerations,
      this.individualGoals,
      this.reflection,
      this.literature);
  }

  ngOnInit() {
    this.getDate();
    this.getReflectionNumber();
    this.reflectionCol = this.db.collection('ReflectionSheet');
    this.reflections = this.reflectionCol.valueChanges();
  }

}
