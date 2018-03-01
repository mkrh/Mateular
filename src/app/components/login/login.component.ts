import { Component, OnInit } from '@angular/core';
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
}
