import { Component, OnInit } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { ReflectionService } from '../../Shared/reflection.service';
import { Reflection } from '../../Models/reflection.model';
import { Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-reflection',
  templateUrl: './edit-reflection.component.html',
  styleUrls: ['../reflection.component.less'],
  providers: [ReflectionService]
})
export class EditReflectionComponent implements OnInit {

  reflections;

  constructor(private db: AngularFirestore, private reflectionService: ReflectionService, private route: ActivatedRoute) {
    db.firestore.settings({ timestampsInSnapshots: true });
  }

  onUpdate() {
  }

  ngOnInit() {
    this.reflections = this.reflectionService.getReflection(this.route.snapshot.params["id"]).valueChanges();
  }

}
