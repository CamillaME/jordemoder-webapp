import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, snapshotChanges } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { SchemaService } from '../../Shared/schema.service';
import { Schema } from '../../Models/schema.model';

// export interface Experienceschema { name: string; dates: Date; }
// export interface ExperienceschemaId extends Experienceschema { id: string; }

@Component({
  selector: 'app-fill-out-schema',
  templateUrl: './fill-out-schema.component.html',
  styleUrls: ['./fill-out-schema.component.css'],
  providers: [SchemaService]
})

export class FillOutSchemaComponent implements OnInit {

  sdf: Date;
  dates: Schema[] = [];

  constructor(private db: AngularFirestore, private schemaService: SchemaService) {
    db.firestore.settings({ timestampsInSnapshots: true});
    // this.experienceSchemaCol = db.collection<Experienceschema>('expSchema');
    // this.experienceSchemas = this.experienceSchemaCol.snapshotChanges().map(actions => {
    //   return actions.map(a => {
    //     const data = a.payload.doc.data() as Experienceschema;
    //     const id = a.payload.doc.id;
    //     return { id, ...data };
    //   });
    // });
  }

  // docId: string = this.randomDocNumber();
  // id: string;

  experienceSchemaCol: AngularFirestoreCollection<any>;
  experienceSchemas: Observable<any[]>;

  // randomDocNumber() {
  //   var text = '';
  //   var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  //   for (var i = 0; i < 5; i++)
  //     text += possible.charAt(Math.floor(Math.random() * possible.length));

  //   return text;
  //   }

  OnAddDate(){
    // this.db.collection('Experienceschema').doc('first').push({test: this.sdf});
    // const docDate = db.database.array('docDate');
    // this.
    
    // docDate.push(this.sdf);

    this.schemaService.saveDate(this.dates).subscribe(response => console.log(response));
  }

  ngOnInit() {
  }

}
