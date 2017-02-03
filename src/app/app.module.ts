import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { LandingComponentComponent } from './components/landing-component/landing-component.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import {AppRoutingModule} from './app-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    LandingComponentComponent,
    LoginComponentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
