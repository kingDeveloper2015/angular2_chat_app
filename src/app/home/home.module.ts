import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

import { SharedModule } from './../shared';



// router config
const routing = RouterModule.forChild([
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{
		path: 'home',
		component: HomeComponent
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
  ]
})
export class HomeModule { }
