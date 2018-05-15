import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ReflectionService } from '../../../Shared/reflection.service';

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

  terms = [
    { name: '7. semester', angleDown: false, angleRight: true },
    { name: '6. semester', angleDown: false, angleRight: true },
    { name: '4. semester', angleDown: false, angleRight: true },
    { name: '2. semester', angleDown: false, angleRight: true }
  ];

  @Output() reflectionChanged = new EventEmitter<any>();

  constructor(private reflectionService: ReflectionService) { }

  onTest(term) {
    this.reflections = this.reflectionService.getReflectionByTermAndUserID(term, "RandomUserID").valueChanges();

    this.reflections.forEach(item => {
      this.labelledBy = this.reflections.length > 0 ? item[0].Id + "-tab" : "";

      // if (term == item[0].Term) {
      //   this.angleDown = true;
      //   this.angleRight = false;
      // }
      // else {
      //   this.angleDown = false;
      //   this.angleRight = true;
      // }

      // if (term == item[0].Term) {
      // this.terms.forEach(term => {
      //   if (term[0].name == item[0].Term) {
      //     term[0].angleDown = true;
      //   }
      // });
      // }

    });

    this.terms.forEach(termItem => {
      if (termItem.name == term) {
        termItem.angleDown = true;
        termItem.angleRight = false;
      }
      else {
        termItem.angleDown = false;
        termItem.angleRight = true;
      }
    });

    // this.terms.forEach(term => {

    // });

    this.reflectionChanged.emit(this.reflections);
  }

  ngOnInit() {
  }

}
