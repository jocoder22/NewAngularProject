import { Router } from '@angular/router';
import { Injectable } from '@angular/core';



@Injectable()
export class LoginService {

    private isLoggedIn = false;
    private currentUser: string;

    constructor(private router: Router) { }

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

    geCurrentUser() {
        return this.currentUser;
    }
}
