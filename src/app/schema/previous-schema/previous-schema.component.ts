import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-previous-schema',
  templateUrl: './previous-schema.component.html',
  styleUrls: ['./previous-schema.component.css']
})
export class PreviousSchemaComponent implements OnInit {

  constructor(private router: Router) { }

  OnFourthSemester() {
    this.router.navigateByUrl('/udfyld-erfaringsskema')
  }
  ngOnInit() {
  }

}
