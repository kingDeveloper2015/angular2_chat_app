import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { AuthService, ChannelsService, MessageService, Message, UserService } from './../../shared';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

	channelId: string;
  messages: Message[];
  constructor(
  	private router: ActivatedRoute,
    private authService: AuthService,
    private messageService: MessageService,
    private userService: UserService
    ) { }

  ngOnInit() {
  	this.router.url.subscribe(data => {
  		this.channelId = data[data.length - 1].path;
      this.messageService.get(this.channelId)
      .subscribe((messages) => {
        this.messages = messages;
        console.log('There are :' + messages.length);
      })
    })
  }

  submit(text: string) {
    let message = new Message({
      body: text,
      senderId: this.userService.getCurrentUser().id,
      senderName: this.userService.getCurrentUser().displayName
    })
    this.messageService.add(this.channelId, message);

  }
}
