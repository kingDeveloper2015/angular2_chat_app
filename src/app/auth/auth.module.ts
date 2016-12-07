import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { SharedModule } from './../shared';

import { AuthComponent } from './auth.component';

import { NoAuthGuard } from './no-auth.service';

const routing = RouterModule.forChild([
	{
		path: 'login',
		component: AuthComponent,
		canActivate: [NoAuthGuard]
	},
	{
		path: 'register',
		component: AuthComponent,
		canActivate: [NoAuthGuard]
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
  ],
  providers: [
  	NoAuthGuard
  ]
})
export class AuthModule { }
