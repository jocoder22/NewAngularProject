import { Component } from '@angular/core';
import { LoginService } from './login-service';


@Component({
  selector: 'app-router',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  template: `
      <hr>
      <h1>Component Router</h1>
      <ul>
        <li><a routerLink="Form">Fill Form!</a></li>
        <li><a routerLink="List">View List of Employee!</a></li>
        <li><a routerLink="Switch">Change Page</a></li>
      </ul>
      <hr>
      <router-outlet></router-outlet>
  `,
})
export class RouterComponent {

  constructor() {}
 }

