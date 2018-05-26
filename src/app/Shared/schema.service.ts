import { Injectable } from '@angular/core';
import { Schema } from '../Models/schema.model';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, snapshotChanges } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class SchemaService {

    constructor(private db: AngularFirestore){}

    experienceSchemaCol: AngularFirestoreCollection<any>;
    experienceSchemas: Observable<any[]>;

    getDocID(){
        this.experienceSchemaCol = db.collection<Experienceschema>;
        this.experienceSchemas = this.experienceSchemaCol.snapshotChanges().map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        });
    }
}