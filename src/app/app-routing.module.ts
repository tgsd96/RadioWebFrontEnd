import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LandingComponentComponent} from './components/landing-component/landing-component.component'
import {LoginComponentComponent} from './components/login-component/login-component.component'
import {RegisterComponent} from './components/register/register.component'
import {DashboardComponent} from './components/dashboard/dashboard.component'
import {TeamComponent} from './components/team/team.component'
import {ProjectComponent} from './components/project/project.component'
import {MarkerComponent} from './components/marker/marker.component'
import {DashviewComponent} from './components/dashview/dashview.component'
const routes: Routes = [
  {
    path: '',
    children: [],
    component: LandingComponentComponent
  },

  {
      path: 'login',
      children: [],
      component : LoginComponentComponent
  },
  {
    path : 'register',
    component : RegisterComponent
  },
  {
    path : 'dashboard',
    component : DashboardComponent,
    children : [
    {
    path : 'data/:id',
    component : MarkerComponent
    },
    {
      path : '',
      component : DashviewComponent
    }

    ]
  },
  {
    path : 'team',
    component : TeamComponent
  },
  {
    path : 'projects',
    component: ProjectComponent
  },
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
