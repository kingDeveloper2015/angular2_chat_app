import { Component, OnInit } from '@angular/core';

import { ChannelsService } from './../shared';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {

	channels$: Observable<any[]>;
	channels: any[];

	loading = false;

  constructor(
  	private channelsService: ChannelsService
  ) { }

  ngOnInit() {
  	this.loading = true;
  	this.channels$ = this.channelsService.getAll();
  	this.channels$.subscribe(data => {
  		this.channels = data
  		this.loading = false;
  	})  	
  }

}
