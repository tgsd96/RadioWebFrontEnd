import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LandingComponentComponent} from './components/landing-component/landing-component.component'
import {LoginComponentComponent} from './components/login-component/login-component.component'
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
