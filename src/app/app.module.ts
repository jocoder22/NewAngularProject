

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { RouterComponent } from './router.component';

import { AppComponent } from './app.component';
import { Header1Component } from './header1/header1.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { ListcomponentComponent } from './listcomponent/listcomponent.component';
import { SwitchComponentComponent } from './switch-component/switch-component.component';


import { routing } from './app.routing';
import { LoginComponentComponent } from './login-component/login-component.component';

import { LoginService } from './login-service';
import { AuthGuard } from './auth-guard-service';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    Header1Component,
    FormComponentComponent,
    ListcomponentComponent,
    SwitchComponentComponent,
    RouterComponent,
    LoginComponentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    routing
  ],
  providers: [AuthGuard, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

