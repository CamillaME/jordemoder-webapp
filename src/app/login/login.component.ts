import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {


  constructor(private auth: AuthService) { }

  Onlogin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.auth.onLogin(email, password);
  }

  ngOnInit() {
  }

}
