import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  constructor(private auth: AuthService) { }

  Onlogin() {
    this.auth.onLogin(this.email, this.password);
  }

  ngOnInit() {
  }

}
