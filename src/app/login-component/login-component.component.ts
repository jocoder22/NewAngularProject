import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Injectable()
export class LoginService {
    private isLoggedIn = false;
    private currentUser: string;

    constructor(private router: Router) {

    }

    login(username, password) {
        if (username === 'admin') {
            this.currentUser = username;
            this.isLoggedIn = true;
            this.router.navigate(['Switch']);
        } else {
            this.isLoggedIn = false;
        }
    }

    isUserLoggedIn() {
        return this.isLoggedIn;
    }
}
