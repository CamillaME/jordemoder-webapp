import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, snapshotChanges } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

export interface Experienceschema { name: string; dates: Date; }
export interface ExperienceschemaId extends Experienceschema { id: string;}

@Component({
  selector: 'app-fill-out-schema',
  templateUrl: './fill-out-schema.component.html',
  styleUrls: ['./fill-out-schema.component.css']
})
export class FillOutSchemaComponent implements OnInit {

  constructor(private db: AngularFirestore) {
    db.firestore.settings({ timestampsInSnapshots: true});
    this.experienceSchemaCol = db.collection<Experienceschema>('expSchema');
    this.experienceSchemas = this.experienceSchemaCol.snapshotChanges().map(actions => {
      return actions.map(a=> {
        const data = a.payload.doc.data() as Experienceschema;
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    })
   }

  experienceSchemaCol: AngularFirestoreCollection<Experienceschema>;
  experienceSchemas: Observable<ExperienceschemaId[]>;

  OnAddDate(){
  }

  ngOnInit() {
  }

}
