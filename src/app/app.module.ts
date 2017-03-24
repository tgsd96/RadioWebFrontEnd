import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { ClarityModule } from 'clarity-angular';
import {FileUploadModule} from 'ng2-file-upload';

import { AppComponent } from './app.component';
import { LandingComponentComponent } from './components/landing-component/landing-component.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import {AppRoutingModule} from './app-routing.module';
import { RegisterComponent } from './components/register/register.component'
import {AuthService} from './service/auth.service';
import {DatasetService} from './service/dataset.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TeamComponent } from './components/team/team.component';
import { ProjectComponent } from './components/project/project.component';
import { MarkerComponent } from './components/marker/marker.component';
import { DashviewComponent } from './components/dashview/dashview.component'

@NgModule({
  declarations: [
    AppComponent,
    LandingComponentComponent,
    LoginComponentComponent,
    RegisterComponent,
    DashboardComponent,
    TeamComponent,
    ProjectComponent,
    MarkerComponent,
    DashviewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    ClarityModule.forRoot(),
    FileUploadModule
  ],
  providers: [AuthService,DatasetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
