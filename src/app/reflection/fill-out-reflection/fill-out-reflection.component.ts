import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fill-out-reflection',
  templateUrl: './fill-out-reflection.component.html',
  styleUrls: ['./fill-out-reflection.component.less']
})
export class FillOutReflectionComponent implements OnInit {

  date: string;
  reflectionCount: string;

  constructor() { }

  getDate() {
    let today = "";
    if ((new Date().getMonth() + 1) < 10) {
      today = new Date().getFullYear() + "-" + 0 + (new Date().getMonth() + 1) + "-" + new Date().getDate();
    }
    else {
      today = new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate();
    }
    this.date = today.toString();
  }

  getReflectionNumber() {
    this.reflectionCount = "" + "/13";
  }

  ngOnInit() {
    this.getDate();
    this.getReflectionNumber();
  }

}
