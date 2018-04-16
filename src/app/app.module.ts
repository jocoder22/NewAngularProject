
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


@NgModule({
  declarations: [
    AppComponent,
    Header1Component,
    FormComponentComponent,
    ListcomponentComponent,
    SwitchComponentComponent,
    RouterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

