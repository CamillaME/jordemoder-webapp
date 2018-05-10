import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-fill-out-schema',
  templateUrl: './fill-out-schema.component.html',
  styleUrls: ['./fill-out-schema.component.css']
})
export class FillOutSchemaComponent implements OnInit {

  constructor(private db: AngularFirestore) {
    db.firestore.settings({ timestampsInSnapshots: true});
   }

   OnAddDate(){
   }

  ngOnInit() {
  }

}
