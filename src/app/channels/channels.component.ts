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

  constructor(
  	private channelsService: ChannelsService
  ) { }

  ngOnInit() {
  	this.channels$ = this.channelsService.getAll();  	
  }

}
