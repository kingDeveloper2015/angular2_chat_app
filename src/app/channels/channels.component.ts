import { Component, OnInit } from '@angular/core';

import { ChannelsService } from './../shared';
import { Observable } from 'rxjs/Rx';

import { Channel } from './../shared';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {
	
  channels: Channel[];
  private _channel$: Observable<Channel[]>;

	loading = false;

  constructor(
  	private channelsService: ChannelsService
  ) { }

  ngOnInit() {
  	this.loading = true;
  	this.channelsService.getAll().subscribe(channels => {
  		this.channels = channels
  		this.loading = false;
  	})  	
  }

}
