import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { SharedModule } from './../shared';

import { AuthComponent } from './auth.component';



const routing = RouterModule.forChild([
	{
		path: 'login',
		component: AuthComponent
	},
	{
		path: 'register',
		component: AuthComponent
	},

])

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    routing
  ],
  declarations: [
  	AuthComponent
  ]
})
export class AuthModule { }
