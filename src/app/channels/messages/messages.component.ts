import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { AuthService, ChannelsService } from './../../shared';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

	channelId: string;

  constructor(
  	private router: ActivatedRoute,
    private authService: AuthService,
    private channelsService: ChannelsService
    ) { }

  ngOnInit() {
  	this.router.url.subscribe(data => {
  		this.channelId = data[data.length - 1].path;
  	})
  }

  submit(text: string) {

    this.authService.currentUserId().subscribe(userId => {
      let message = {
        senderId: userId,
        text: text,
      };
      console.log('working: ' + this.channelId, message);

      this.channelsService.addMessage(this.channelId, message)
      .then(success => {
        if (success) {
          console.log("ADD SUCCESSFULLY");
        } else {
          console.log("ERROR ADDING");
        }
      })

    })
  }
}
