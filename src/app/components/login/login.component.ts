import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Login } from '../../../model/login';

@Component({
  selector: 'app-login-overview',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  login: Login;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.login = new Login();
  }

  onSubmit(form: NgForm) {
    this.loginService.login(this.login).subscribe(
      response => {
        if (form) { form.resetForm(); }
      },
      error => alert('something went wrong')
    );
  }

  onLogout() {
    this.loginService.logout(this.login).subscribe(
      response => {
        console.log(response);
      }
    )
  }
}
