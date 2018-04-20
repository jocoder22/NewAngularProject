import { LoginService } from './../login-service';
import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  login(username, password) {
      this.loginService.login(username, password);
  }

  ngOnInit() {
  }

}

