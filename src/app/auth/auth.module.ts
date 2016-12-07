import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { SharedModule } from './../shared';

import { AuthComponent } from './auth.component';

import { NoAuthGuard } from './no-auth.service';

import { LogoutResolver } from './../shared';
import { LogoutComponent } from './logout.component';

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
  {
    path: 'logout',
    component: LogoutComponent
  }

])

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    routing
  ],
  declarations: [
  	AuthComponent,
    LogoutComponent
  ],
  providers: [
  	NoAuthGuard
  ]
})
export class AuthModule { }
