import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Header1Component } from './header1/header1.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { ListcomponentComponent } from './listcomponent/listcomponent.component';
import { SwitchComponentComponent } from './switch-component/switch-component.component';


@NgModule({
  declarations: [
    AppComponent,
    Header1Component,
    FormComponentComponent,
    ListcomponentComponent,
    SwitchComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
