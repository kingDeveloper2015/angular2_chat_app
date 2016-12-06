import { NgModule } from '@angular/core';

import { SharedModule } from './../shared';

import { ChannelsComponent } from './channels.component';

import { RouterModule } from '@angular/router';

const routing = RouterModule.forChild([
	{
		path: 'channels',
		component: ChannelsComponent
	}

])


@NgModule({
  imports: [
    SharedModule,
    routing
  ],
  declarations: [
  	ChannelsComponent
  ]
})
export class ChannelsModule { }
