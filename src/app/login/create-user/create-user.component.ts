import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(private authService: AuthService) { }

  onCreate(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.onCreateUser(email, password);
  }

  ngOnInit() {
  }

}
