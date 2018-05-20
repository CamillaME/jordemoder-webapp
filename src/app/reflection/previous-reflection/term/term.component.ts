import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ReflectionService } from '../../../Shared/reflection.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-term',
  templateUrl: './term.component.html',
  styleUrls: ['../../reflection.component.less']
})
export class TermComponent implements OnInit {

  reflections;
  labelledBy: string;
  angleDown: boolean;
  angleRight: boolean;
  DescriptionOfTheCourseSituation: string;

  terms = [
    { name: '7. semester', angleDown: false, angleRight: true },
    { name: '6. semester', angleDown: false, angleRight: true },
    { name: '4. semester', angleDown: false, angleRight: true },
    { name: '2. semester', angleDown: false, angleRight: true }
  ];

  @Output() reflectionChanged = new EventEmitter<any>();

  constructor(private reflectionService: ReflectionService) { }

  getReflections(term) {
    let self = this;

    firebase.auth().onAuthStateChanged(function (user) {
      self.reflections = self.reflectionService.getReflectionByTermAndUserID(term, user.uid).valueChanges();

      self.reflections.forEach(item => {
        self.labelledBy = self.reflections.length > 0 ? item[0].Id + "-tab" : "";
      });

      self.terms.forEach(termItem => {
        if (termItem.name == term) {
          termItem.angleDown = true;
          termItem.angleRight = false;
        }
        else {
          termItem.angleDown = false;
          termItem.angleRight = true;
        }
      });

      self.reflectionChanged.emit(self.reflections);
    });
  }

  ngOnInit() {
  }

}
