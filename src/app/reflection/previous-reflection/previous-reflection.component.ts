import { Component, OnInit } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { ReflectionService } from '../../Shared/reflection.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-previous-reflection',
  templateUrl: './previous-reflection.component.html',
  styleUrls: ['../reflection.component.less'],
  providers: [ReflectionService]
})
export class PreviousReflectionComponent implements OnInit {

  reflections;
  labelledBy: string;
  isActive: boolean;

  constructor(private db: AngularFirestore, private reflectionService: ReflectionService) {
    db.firestore.settings({ timestampsInSnapshots: true });

    this.reflections = this.reflectionService.getReflectionByTermAndUserID("4. semester", "RandomUserID").valueChanges();

    this.reflections.forEach(item => {
      this.labelledBy = item[0].Id + "-tab";
    });
  }

  ngOnInit() {
    this.reflections = this.reflectionService.getReflectionByTermAndUserID("4. semester", "RandomUserID").valueChanges();
  }

}
