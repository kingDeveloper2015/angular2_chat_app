import { NgModule } from '@angular/core';

import { SharedModule } from './../shared';

import { ChannelsComponent } from './channels.component';
import { MessagesComponent } from './messages/messages.component';

import { RouterModule } from '@angular/router';

const routing = RouterModule.forChild([
	{
		path: 'channels',    
		component: ChannelsComponent,
    children: [
      {
        path: ':id',
        component: MessagesComponent
      }
    ]
	}


])


@NgModule({
  imports: [
    SharedModule,
    routing
  ],
  declarations: [
  	ChannelsComponent,
    MessagesComponent
  ]
})
export class ChannelsModule { }
