import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { LoginService } from './login-service';



@Injectable()
export class AuthGuard implements CanActivate {
    constructor(public loginService: LoginService) {
    }

    canActivate(): Observable<boolean> {
        return Observable.of(this.loginService.isUserLoggedIn());
    }
}

