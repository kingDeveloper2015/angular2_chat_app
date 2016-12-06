import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

	channelId: string;

  constructor(
  	private router: ActivatedRoute
  ) { }

  ngOnInit() {
  	this.router.url.subscribe(data => {
  		this.channelId = data[data.length - 1].path;
  		console.log(this.channelId);
  	})
  }

  submit(message: string) {
  	
  }
}
