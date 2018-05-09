import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

  // test: boolean = true;

  constructor(private router: Router) { }

  schemaClass() {
    if (this.router.url.indexOf('/udfyld-erfaringsskema') > -1 || this.router.url.indexOf('/tidligere-erfaringsskema') > -1) {
      return "active";
    }
  }

  reflectionClass() {
    if (this.router.url.indexOf('/udfyld-refleksionsark') > -1 ||
      this.router.url.indexOf('/tidligere-refleksionsark') > -1 ||
      this.router.url.indexOf('/noter') > -1) {
      return "active";
    }
  }

  profileClass() {
    if (this.router.url.indexOf('/min-profil') > -1 ||
      this.router.url.indexOf('/laeringsstatistik') > -1 ||
      this.router.url.indexOf('/praktik') > -1 ||
      this.router.url.indexOf('/indstillinger') > -1 ||
      this.router.url.indexOf('/hjaelp') > -1) {
      return "active";
    }
  }

  ngOnInit() {

  }

}
