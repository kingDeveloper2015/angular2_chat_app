import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

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
    routing
  ],
  declarations: [
  	HomeComponent
  ]
})
export class HomeModule { }