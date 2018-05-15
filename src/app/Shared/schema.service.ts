import { Injectable } from '@angular/core';
import { Schema } from '../Models/schema.model';
import { Http } from '@angular/http';

@Injectable()
export class SchemaService {

    constructor(private http: Http){}

    saveDate(dates: Schema[]){
        return this.http.post('https://jordemoder-app.firebaseio.com/Experienceschema/test.json', dates);
    }
}