// import { Observable } from 'rxjs/Rx';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';
import { Injectable } from '@angular/core';
import { LoginService } from './login-service';



@Injectable()
export class AuthGuard implements CanActivate {
    constructor(public loginService: LoginService) {
    }

    canActivate(): Observable<boolean> {
        console.log(`AuthGuard#canActivate callled`);
        return Observable.of(this.loginService.isUserLoggedIn());
    }
}

