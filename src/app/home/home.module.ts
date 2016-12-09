import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

import { SharedModule } from './../shared';
import { NoAuthGuard } from './../auth/no-auth.service';
import { HomeAuthResolver } from './home-auth.resolver';


// router config
const routing = RouterModule.forChild([
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
	{
		path: 'home',
		component: HomeComponent,
		canActivate: [NoAuthGuard]
	}
]);


@NgModule({
  imports: [
    CommonModule,
    routing,
    SharedModule
  ],
  declarations: [
  	HomeComponent
  ],
  providers: [
  	HomeAuthResolver
  ]
})
export class HomeModule { }
