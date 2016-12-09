import { Injectable } from '@angular/core';
import { Message } from './../models';
import { Observable } from 'rxjs/Rx';
import { AngularFire } from 'angularfire2';
@Injectable()
export class MessageService {

	constructor(
		private af: AngularFire
		) { }

	get(channelId: string): Observable<Message[]> {
		return this.af.database.list('/messagesPerChannel/' + channelId +'/messages');
	}

	add(channelId: string, payload) {
		return this.af.database.list('/messagesPerChannel/' + channelId + '/messages')
			.push(payload);
	}
}