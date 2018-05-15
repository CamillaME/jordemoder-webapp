import { Component, OnInit } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { ReflectionService } from '../../Shared/reflection.service';
import { Router } from "@angular/router";

import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-previous-reflection',
  templateUrl: './previous-reflection.component.html',
  styleUrls: ['../reflection.component.less'],
  providers: [ReflectionService]
})
export class PreviousReflectionComponent implements OnInit {

  reflections;
  labelledBy: string;

  constructor(private db: AngularFirestore, private reflectionService: ReflectionService) {
    db.firestore.settings({ timestampsInSnapshots: true });

    // this.reflections = this.reflectionService.getReflectionByTermAndUserID("4. semester", "RandomUserID").valueChanges();

    // this.reflections.forEach(item => {
    //   this.labelledBy = item[0].Id + "-tab";
    // });
  }

  ngOnInit() {
    // this.reflections = this.reflectionService.getReflectionByTermAndUserID("4. semester", "RandomUserID").valueChanges();
  }

  reflectionChangedHandler(reflections) {
    this.reflections = reflections;
  }

  onDownload(title, id) {
    const elementToPrint = document.getElementById('reflection-' + id); //The html element to become a pdf

    // var doc = new jsPDF();
    // const pdf = new jsPDF();
    // pdf.addHTML(elementToPrint, () => {
    //   pdf.save(title);
    // });

    var doc = new jsPDF();

    // We'll make our own renderer to skip this editor
    var specialElementHandlers = {
      '#editor': function (element, renderer) {
        return true;
      }
    };

    // All units are in the set measurement for the document
    // This can be changed to "pt" (points), "mm" (Default), "cm", "in"
    doc.fromHTML((elementToPrint), 15, 15, {
      'width': 170,
      'elementHandlers': specialElementHandlers
    });

    doc.save(title);
  }
}
